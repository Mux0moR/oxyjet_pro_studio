export const COOKIE_CONSENT_KEY = 'cookie_consent';
export const GA_MEASUREMENT_ID = 'G-RRGV46J3BG';

export type CookieConsentStatus = 'accepted' | 'declined' | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const getSavedCookieConsent = (): CookieConsentStatus => {
  try {
    const saved = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (saved === 'accepted' || saved === 'declined') {
      return saved;
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

  window.gtag('consent', 'update', {
    analytics_storage: status === 'accepted' ? 'granted' : 'denied',
  });
};

export const trackEvent = (
  eventName: 'generate_lead' | 'contact_whatsapp' | 'language_switch' | string,
  params?: Record<string, string | number | boolean>
): void => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, params || {});
};
