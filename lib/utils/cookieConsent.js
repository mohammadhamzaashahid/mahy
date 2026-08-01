const STORAGE_KEY = "mahy_cookie_consent";
// Bump this when the cookie policy or category list changes materially,
// so previously stored consent is treated as stale and re-requested.
const CONSENT_VERSION = 1;
export const CONSENT_UPDATED_EVENT = "mahy-cookie-consent-updated";

export function getStoredConsent() {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function storeConsent(preferences) {
  if (typeof window === "undefined") return null;
  const record = {
    version: CONSENT_VERSION,
    necessary: true,
    analytics: !!preferences.analytics,
    marketing: !!preferences.marketing,
    timestamp: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  window.dispatchEvent(
    new CustomEvent(CONSENT_UPDATED_EVENT, { detail: record })
  );
  return record;
}

// For future use once analytics/marketing scripts are added: gate them with
// `if (hasConsent("analytics")) { ... }` instead of loading unconditionally.
export function hasConsent(category) {
  if (category === "necessary") return true;
  const consent = getStoredConsent();
  return !!consent?.[category];
}
