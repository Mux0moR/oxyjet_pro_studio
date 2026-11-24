# OxyJet Studio

High-converting agency website and interactive project estimator for **OxyJet Studio** (`https://oxyjetpro.ai.studio/`) — built with React, TypeScript, Vite, and Tailwind CSS v4 in a dark & gold precision aesthetic, with trilingual localization (`EN | RU | KA`), GDPR-compliant Google Analytics 4 Consent Mode v2, and Google Sheets + Telegram Group lead automation.

---

## Visual Style & Design System

The interface follows a high-contrast dark engineering aesthetic inspired by developer tooling and fintech dashboards:

- **Color Palette (`src/index.css`)**
  - **Surfaces:** Obsidian dark base (`#050507`), raised panels (`#0a0a0f`), card surfaces (`#0c0c10`), and subtle hover states (`#111117`).
  - **Accents:** Metallic gold (`#daa520`) and bright gold hover highlights (`#ffce33`), paired with subtle radial gold ambient blurs and `.hero-grid-bg` matrix grid lines.
  - **Typography Colors:** Crisp light ink (`#e8e8ed`), secondary slate (`#8a8aa0`), and muted metadata (`#555570`).
  - **Borders:** Translucent hairline borders (`rgba(255, 255, 255, 0.06)`–`0.14`) and gold accent borders (`rgba(218, 165, 32, 0.3)`).
- **Typography**
  - **Display / Headings:** `Unbounded` (bold geometric display weight).
  - **UI Controls / Labels / Eyebrows / Metrics:** `Space Mono` (uppercase technical tracking).
  - **Body Copy:** `Inter` for clean long-form readability.
  - **Georgian Script Support:** `Noto Sans Georgian` fallback with dedicated `html[lang="ka"]` line-height and letter-spacing adjustments to prevent Mkhedruli clipping.
- **UI Patterns**
  - Translucent `backdrop-blur` navigation bar, floating modals, and bottom-aligned GDPR cookie consent banner.
  - Consistent dark-surface action buttons with `#daa520` icon accents and solid gold hover inversions across direct contact channels (Telegram, WhatsApp, Email).

---

## Technologies Used

### Frontend & Tooling
- **[React 19](https://react.dev/)** & **[TypeScript (~5.8)](https://www.typescriptlang.org/)** — Modular functional components and hooks.
- **[Vite 6](https://vite.dev/)** — Fast development server (`port 3000`) and production bundler (`dist/`).
- **[Tailwind CSS 4](https://tailwindcss.com/)** (`@tailwindcss/vite`) — Utility-first styling via `@import "tailwindcss";` and custom CSS tokens.
- **[Lucide React](https://lucide.dev/)** — Crisp line icons complemented by a custom `WhatsAppIcon` SVG component.

### Localization & Currency
- **Trilingual i18n (`src/i18n/`)** — Custom React `LanguageProvider` supporting **English (`en`, default)**, **Russian (`ru`)**, and **Georgian (`ka`)** with `localStorage` persistence (`oxyjet_lang`) and dynamic `<html lang>`, `<title>`, and meta description updates.
- **USD Pricing Standardization** — All service tiers, interactive calculator estimates, case study budgets, and inquiry budget options are standardized in US Dollars (`$`).

### Lead Capture & Automation
- **Google Apps Script (`google-apps-script/Code.gs`)** — Serverless webhook receiving form submissions via CORS-safe `URLSearchParams` (`application/x-www-form-urlencoded`, `mode: 'no-cors'`).
- **Google Sheets + Telegram Group Bot** — Appends each inquiry to Google Sheets (`Лист1`) first with `LockService`, then sends an escaped HTML lead card with smart 1-click Telegram (`https://t.me/...`) and WhatsApp (`https://wa.me/...`) inline keyboard buttons to a team Telegram group.

### Analytics, Privacy & SEO
- **Google Analytics 4 (`G-RRGV46J3BG`) with Consent Mode v2 (`index.html`, `src/utils/analytics.ts`)** — Initializes all 4 consent signals (`ad_storage`, `ad_user_data`, `ad_personalization`, `analytics_storage`) before `gtag.js` loads, defaulting to `'denied'` unless `'granted'` is saved in `localStorage` (`cookie_consent`).
- **Custom GA4 Event Tracking** — Safely tracks `generate_lead`, `contact_telegram`, `contact_whatsapp`, and `language_switch` without blocking UI navigation.
- **GDPR Cookie Banner & Privacy Policy Modal** — Localized `CookieBanner` and scrollable `PrivacyPolicyModal` accessible from both the banner and footer.
- **Social & Search SEO (`index.html`)** — Open Graph and Twitter Card (`summary_large_image`) metadata configured with `/og-image.png` (`public/og-image.png`) and canonical URL tags.

---

## Project Structure

```text
├── google-apps-script/
│   └── Code.gs                  # Google Sheets + Telegram Group webhook handler
├── public/
│   ├── favicon.ico / .svg       # Site icons
│   └── og-image.png             # Open Graph / Twitter share preview image
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Header, EN | RU | KA switcher, mobile drawer
│   │   ├── Hero.tsx             # Hero section & key studio metrics
│   │   ├── ProjectShowcase.tsx  # Filterable & searchable case studies
│   │   ├── ProjectModal.tsx     # Detailed case study breakdown modal
│   │   ├── ServicesSection.tsx  # Service packages & contractual guarantees
│   │   ├── ProjectCalculator.tsx# Interactive USD cost & timeline estimator
│   │   ├── ProcessSection.tsx   # Workflow steps
│   │   ├── TechStackSection.tsx # Engineering stack & PageSpeed benchmark
│   │   ├── TestimonialsSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── ContactSection.tsx   # Direct channels + Google Apps Script lead form
│   │   ├── Footer.tsx           # Links, contacts & Privacy Policy trigger
│   │   ├── CookieBanner.tsx     # GDPR Cookie Consent floating banner
│   │   ├── PrivacyPolicyModal.tsx
│   │   └── WhatsAppIcon.tsx
│   ├── data/
│   │   └── projects.ts          # Localized case studies, packages, reviews & FAQs
│   ├── i18n/
│   │   ├── LanguageContext.tsx  # Language state & localStorage persistence
│   │   └── translations.ts      # Complete EN / RU / KA dictionary
│   ├── utils/
│   │   └── analytics.ts         # GA4 Consent Mode v2 & safe event helpers
│   ├── App.tsx
│   ├── index.css                # Theme tokens, fonts & grid background
│   ├── main.tsx
│   └── types.ts
├── index.html                   # Meta tags, Google Fonts & Consent Mode v2
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server on http://localhost:3000
npm run dev

# Type-check with TypeScript
npm run lint

# Build for production (outputs to dist/)
npm run build

# Preview the production build locally
npm run preview
```

### Lead Webhook Setup (Optional)
1. Open the target Google Spreadsheet and go to **Extensions → Apps Script**.
2. Copy the contents of `google-apps-script/Code.gs` into the Apps Script editor.
3. Set `TELEGRAM_BOT_TOKEN` and your negative group `TELEGRAM_CHAT_ID` inside `Code.gs`.
4. Deploy as a **Web App** (*Execute as: Me*, *Who has access: Anyone*) and configure the `/exec` endpoint in `src/components/ContactSection.tsx`.
