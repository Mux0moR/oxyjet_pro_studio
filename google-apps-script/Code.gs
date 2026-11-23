/**
 * OxyJet Studio — Lead Capture & Telegram Group Notification Script
 * Spreadsheet ID: 1P0cOcVeNsywZEcEJUM5OlNVDsVQ7VLghkBCPoqMdTZk
 * Target Sheet: Лист1
 */

// ============================================================================
// 1. CONFIGURATION (Keep tokens & IDs strictly inside Code.gs — never in frontend)
// ============================================================================
const SPREADSHEET_ID = '1P0cOcVeNsywZEcEJUM5OlNVDsVQ7VLghkBCPoqMdTZk';
const SHEET_NAME = 'Лист1';

// Bot token from @BotFather (e.g., '1234567890:ABCdefGHIjklMNOpqrsTUVwxyz')
const TELEGRAM_BOT_TOKEN = '1234567890:ABCdefGHIjklMNOpqrsTUVwxyz';

// IMPORTANT: For a Telegram Group or Supergroup, CHAT_ID MUST start with a minus sign:
// - Supergroups usually start with '-100...' (e.g., '-1001234567890')
// - Regular groups start with '-' (e.g., '-987654321')
const TELEGRAM_CHAT_ID = '-100987654321';

// ============================================================================
// 2. WEB APP ENDPOINTS
// ============================================================================

/**
 * Handles incoming POST requests from the "GET ESTIMATE & ROADMAP IN 15 MIN" form.
 * Supports both JSON payloads (including text/plain CORS-free POST) and form-urlencoded data.
 */
function doPost(e) {
  try {
    const payload = parseIncomingPayload_(e);

    const name = normalizeString_(payload.name);
    const contact = normalizeString_(payload.contact);
    const email = normalizeString_(payload.email);
    const budget = normalizeString_(payload.budget) || '—';
    const projectDetails = normalizeString_(payload.projectDetails || payload.message || payload.task);
    const language = normalizeString_(payload.language || payload.lang) || 'en';
    const timestamp = Utilities.formatDate(
      new Date(),
      Session.getScriptTimeZone() || 'UTC',
      'yyyy-MM-dd HH:mm:ss'
    );

    // 1. Append lead row to sheet Лист1 of Spreadsheet 1P0cOcVeNsywZEcEJUM5OlNVDsVQ7VLghkBCPoqMdTZk
    appendLeadToSheet_([
      timestamp,
      name || '—',
      contact || '—',
      email || '—',
      budget,
      projectDetails || 'Не указано',
      language.toUpperCase(),
    ]);

    // 2. Send formatted HTML lead card + 1-click reply links to Telegram Group
    sendTelegramGroupLeadNotification_({
      name: name || '—',
      contact: contact || '—',
      email,
      budget,
      projectDetails,
      language: language.toUpperCase(),
    });

    return createJsonResponse_({ ok: true, message: 'Lead saved and notification dispatched.' });
  } catch (err) {
    Logger.log('doPost critical error: ' + err);
    return createJsonResponse_({ ok: false, error: String(err) });
  }
}

/**
 * Health check endpoint for verifying the deployed Web App URL in a browser.
 */
function doGet() {
  return createJsonResponse_({
    ok: true,
    service: 'OxyJet Studio Lead Webhook',
    sheet: SHEET_NAME,
  });
}

// ============================================================================
// 3. GOOGLE SHEETS SYNC (WITH SCRIPT LOCK)
// ============================================================================

function appendLeadToSheet_(rowValues) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      throw new Error('Sheet "' + SHEET_NAME + '" not found in spreadsheet ' + SPREADSHEET_ID);
    }

    // Initialize header row automatically if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Name',
        'Telegram / WhatsApp / Phone',
        'Email',
        'Estimated Budget',
        'Project Description',
        'Language',
      ]);
    }

    sheet.appendRow(rowValues);
  } finally {
    if (lock.hasLock()) {
      lock.releaseLock();
    }
  }
}

// ============================================================================
// 4. TELEGRAM GROUP NOTIFICATION & SMART QUICK-REPLY LINKS PARSER
// ============================================================================

function sendTelegramGroupLeadNotification_(lead) {
  try {
    if (
      !TELEGRAM_BOT_TOKEN ||
      TELEGRAM_BOT_TOKEN === 'PASTE_YOUR_TELEGRAM_BOT_TOKEN_HERE' ||
      !TELEGRAM_CHAT_ID
    ) {
      Logger.log('Telegram credentials are not configured yet. Skipping Telegram notification.');
      return;
    }

    const quickReply = buildQuickReplyLinks_(lead.contact);

    const lines = [
      '🔥 <b>Новая заявка — OxyJet Studio</b>',
      '',
      '👤 <b>Имя:</b> ' + escapeHtml_(lead.name),
      '📱 <b>Контакт:</b> <code>' + escapeHtml_(lead.contact) + '</code>',
      '📧 <b>Email:</b> ' + (lead.email ? escapeHtml_(lead.email) : '—'),
      '💰 <b>Бюджет:</b> <b>' + escapeHtml_(lead.budget) + '</b>',
      '🌐 <b>Язык:</b> ' + escapeHtml_(lead.language),
      '',
      '📝 <b>Задача:</b>',
      lead.projectDetails ? escapeHtml_(lead.projectDetails) : 'Не указано',
    ];

    if (quickReply.htmlLinks.length > 0) {
      lines.push('', '⚡ <b>Быстрый ответ:</b> ' + quickReply.htmlLinks.join('  •  '));
    }

    const apiUrl = 'https://api.telegram.org/bot' + TELEGRAM_BOT_TOKEN + '/sendMessage';
    const requestBody = {
      chat_id: String(TELEGRAM_CHAT_ID).trim(),
      text: lines.join('\n'),
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    };

    if (quickReply.inlineButtons.length > 0) {
      requestBody.reply_markup = {
        inline_keyboard: [quickReply.inlineButtons],
      };
    }

    const response = UrlFetchApp.fetch(apiUrl, {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify(requestBody),
      muteHttpExceptions: true,
    });

    const statusCode = response.getResponseCode();
    if (statusCode < 200 || statusCode >= 300) {
      Logger.log('Telegram API error (' + statusCode + '): ' + response.getContentText());
    }
  } catch (err) {
    // Isolated catch ensures Google Sheets logging never fails if Telegram request errors
    Logger.log('Telegram notification failed: ' + err);
  }
}

/**
 * Parses the submitted contact field into 1-click HTML links & Inline Keyboard buttons
 * for Telegram (@username or +phone) and WhatsApp (+phone).
 */
function buildQuickReplyLinks_(rawContact) {
  const htmlLinks = [];
  const inlineButtons = [];
  const contact = normalizeString_(rawContact);

  if (!contact || contact === '—') {
    return { htmlLinks: htmlLinks, inlineButtons: inlineButtons };
  }

  let telegramUsername = '';

  // Case 1a: Explicit t.me/username link
  const tmeMatch = contact.match(/(?:https?:\/\/)?t\.me\/([a-zA-Z0-9_]{3,32})/i);
  if (tmeMatch && tmeMatch[1]) {
    telegramUsername = tmeMatch[1];
  } else if (contact.charAt(0) === '@') {
    // Case 1b: Starts with '@' (Telegram handle)
    const candidate = contact.slice(1).split(/[\s,;/]+/)[0];
    if (/^[a-zA-Z0-9_]{3,32}$/.test(candidate) && !/^\d+$/.test(candidate)) {
      telegramUsername = candidate;
    }
  } else if (/^[a-zA-Z][a-zA-Z0-9_]{2,31}$/.test(contact)) {
    // Case 1c: Looks like a Telegram username without '@' (letters/digits/underscore, no spaces, not digits-only)
    telegramUsername = contact;
  }

  if (telegramUsername) {
    const safeUsername = encodeURIComponent(telegramUsername);
    const tgUrl = 'https://t.me/' + safeUsername;
    htmlLinks.push('<a href="' + tgUrl + '">💬 Написать в Telegram</a>');
    inlineButtons.push({ text: '💬 Написать в Telegram', url: tgUrl });
  }

  // Case 2: Phone number detection (7+ digits, excluding pure emails or pure @username handles)
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
  const digits = contact.replace(/\D/g, '');
  const isUsernameWithDigits =
    Boolean(telegramUsername) && contact.indexOf(' ') === -1 && contact.indexOf('+') === -1;

  if (!isEmail && !isUsernameWithDigits && digits.length >= 7) {
    const waUrl = 'https://wa.me/' + digits;
    const tgPhoneUrl = 'https://t.me/+' + digits;

    htmlLinks.push('<a href="' + waUrl + '">🟢 Написать в WhatsApp</a>');
    htmlLinks.push('<a href="' + tgPhoneUrl + '">✈️ Написать в Telegram</a>');

    inlineButtons.push({ text: '🟢 Написать в WhatsApp', url: waUrl });
    inlineButtons.push({ text: '✈️ Написать в Telegram', url: tgPhoneUrl });
  }

  return {
    htmlLinks: htmlLinks,
    inlineButtons: inlineButtons,
  };
}

// ============================================================================
// 5. HELPERS & OPTIONAL EDITOR TEST FUNCTION
// ============================================================================

function parseIncomingPayload_(e) {
  if (!e) return {};

  // Primary path: application/x-www-form-urlencoded (URLSearchParams via fetch no-cors)
  const params = e.parameter || {};
  if (
    params.name !== undefined ||
    params.contact !== undefined ||
    params.email !== undefined ||
    params.budget !== undefined ||
    params.projectDetails !== undefined ||
    params.language !== undefined
  ) {
    return params;
  }

  // Fallback path: raw JSON in e.postData.contents
  if (e.postData && e.postData.contents) {
    try {
      const parsed = JSON.parse(e.postData.contents);
      if (parsed && typeof parsed === 'object') {
        return parsed;
      }
    } catch (_jsonErr) {
      // Ignore malformed JSON and return params below
    }
  }

  return params;
}

function normalizeString_(value) {
  if (value === null || value === undefined) return '';
  return String(value).trim();
}

function escapeHtml_(value) {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function createJsonResponse_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Run this function manually inside the Apps Script editor to test
 * Sheet append + Telegram Group message + inline quick-reply buttons.
 */
function testLeadNotification() {
  sendTelegramGroupLeadNotification_({
    name: 'Test Lead',
    contact: '+995 555 555555',
    email: 'hello@test.com',
    budget: '$3,500 – $7,000',
    projectDetails: 'Тестовая заявка из Google Apps Script для проверки группы.',
    language: 'EN',
  });
}