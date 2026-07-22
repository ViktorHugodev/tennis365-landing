// Analytics & Persistent Event Store for Tennis365

const STORAGE_KEY = 'tennis365_click_events';

// Generate or retrieve a persistent anonymous Visitor ID
export const getVisitorId = () => {
  if (typeof window === 'undefined') return 'server';
  let visitorId = localStorage.getItem('tennis365_visitor_id');
  if (!visitorId) {
    visitorId = 'usr_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now().toString(36);
    localStorage.setItem('tennis365_visitor_id', visitorId);
  }
  return visitorId;
};

// 1. Capture and store UTM parameters from current URL
export const initUtmTracking = () => {
  if (typeof window === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'src', 'sck'];
  const storedUtms = {};

  let hasNewUtms = false;
  utmKeys.forEach(key => {
    const val = urlParams.get(key);
    if (val) {
      storedUtms[key] = val;
      hasNewUtms = true;
    }
  });

  if (hasNewUtms) {
    try {
      sessionStorage.setItem('tennis365_utms', JSON.stringify(storedUtms));
    } catch {
      console.warn('Unable to save UTMs to sessionStorage');
    }
  }
};

// 2. Get saved UTM query string
export const getUtmQueryString = () => {
  if (typeof window === 'undefined') return '';

  let stored = {};
  try {
    const raw = sessionStorage.getItem('tennis365_utms');
    if (raw) stored = JSON.parse(raw);
  } catch {
    console.warn('Unable to read UTMs');
  }

  const urlParams = new URLSearchParams(window.location.search);
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'src', 'sck'];
  
  utmKeys.forEach(key => {
    if (!stored[key] && urlParams.get(key)) {
      stored[key] = urlParams.get(key);
    }
  });

  const queryParts = Object.entries(stored).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
  return queryParts.length > 0 ? queryParts.join('&') : '';
};

// 3. Helper to format final Kiwify checkout link with all UTMs preserved
export const buildCheckoutUrl = (baseUrl) => {
  const query = getUtmQueryString();
  if (!query) return baseUrl;
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}${query}`;
};

// 4. Retrieve all stored click events
export const getClickEvents = () => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    console.error('Error loading click events');
    return [];
  }
};

// 5. Clear all stored click events
export const clearClickEvents = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
};

// 6. Detect simplified device type
const getDeviceType = () => {
  if (typeof navigator === 'undefined') return 'Desktop';
  const ua = navigator.userAgent;
  if (/mobile/i.test(ua)) return 'Mobile';
  if (/ipad|tablet/i.test(ua)) return 'Tablet';
  return 'Desktop';
};

// 7. Track Event (Dispatches to local store, GA4, and Meta Pixel)
export const trackEvent = (eventName, params = {}) => {
  if (typeof window === 'undefined') return;

  let utmSource = 'Direto';
  let utmMedium = 'Nenhum';
  let utmCampaign = 'Nenhum';
  
  try {
    const rawUtm = sessionStorage.getItem('tennis365_utms');
    if (rawUtm) {
      const parsed = JSON.parse(rawUtm);
      if (parsed.utm_source || parsed.src) utmSource = parsed.utm_source || parsed.src;
      if (parsed.utm_medium) utmMedium = parsed.utm_medium;
      if (parsed.utm_campaign) utmCampaign = parsed.utm_campaign;
    }
  } catch {
    // Ignore error
  }

  const now = new Date();

  const eventRecord = {
    id: 'evt_' + Math.random().toString(36).substring(2, 9),
    visitorId: getVisitorId(),
    eventName,
    timestamp: now.toISOString(),
    formattedTime: now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    formattedDate: now.toLocaleDateString('pt-BR'),
    device: getDeviceType(),
    source: utmSource,
    medium: utmMedium,
    campaign: utmCampaign,
    path: window.location.pathname,
    params,
  };

  // Save to persistent storage
  try {
    const existing = getClickEvents();
    const updated = [eventRecord, ...existing].slice(0, 500); // keep last 500 events
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {
    console.error('Error saving event log');
  }

  // Google Analytics 4
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  // Meta Pixel
  if (typeof window.fbq === 'function') {
    if (eventName === 'InitiateCheckout') {
      window.fbq('track', 'InitiateCheckout', params);
    } else {
      window.fbq('trackCustom', eventName, params);
    }
  }

  if (import.meta.env?.DEV) {
    console.log('[Analytics Logged]:', eventRecord);
  }
};
