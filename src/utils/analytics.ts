export const COOKIE_CONSENT_KEY = 'cookie_consent';
export const GA_MEASUREMENT_ID = 'G-RRGV46J3BG';

export type CookieConsentStatus = 'granted' | 'denied' | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const getSavedCookieConsent = (): CookieConsentStatus => {
  try {
    const saved = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (saved === 'granted' || saved === 'accepted') {
      return 'granted';
    }
    if (saved === 'denied' || saved === 'declined') {
      return 'denied';
    }
  } catch {
    // Ignore storage access errors in restricted environments
  }
  return null;
};

export const saveCookieConsent = (status: Exclude<CookieConsentStatus, null>): void => {
  try {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, status);
  } catch {
    // Ignore storage write errors
  }
};

export const updateGtagConsent = (status: CookieConsentStatus): void => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  const value = status === 'granted' ? 'granted' : 'denied';

  window.gtag('consent', 'update', {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  });
};

export const trackEvent = (
  eventName: 'generate_lead' | 'contact_whatsapp' | 'contact_telegram' | 'language_switch' | string,
  params?: Record<string, string | number | boolean>
): void => {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, params || {});
    }
  } catch {
    // Never block navigation or UI interaction if analytics is blocked
  }
};

export const trackTelegramClick = (location: string, language: string): void => {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'contact_telegram', {
        method: 'telegram_bot',
        location,
        language,
      });
    }
  } catch {
    // Never block navigation to Telegram if analytics is blocked
  }
};
