// Analytics & UTM Tracking Utility for Tennis365 Landing Page

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
    } catch (e) {
      console.warn('Unable to save UTMs to sessionStorage', e);
    }
  }
};

// 2. Get saved UTM query string to append to Kiwify or external checkout links
export const getUtmQueryString = () => {
  if (typeof window === 'undefined') return '';

  let stored = {};
  try {
    const raw = sessionStorage.getItem('tennis365_utms');
    if (raw) stored = JSON.parse(raw);
  } catch (e) {
    console.warn('Unable to read UTMs', e);
  }

  // Fallback to active URL params if available
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

// 4. Custom Event Tracker (GA4, Facebook Pixel, Custom Dashboard)
export const trackEvent = (eventName, params = {}) => {
  if (typeof window === 'undefined') return;

  const eventPayload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    path: window.location.pathname,
    ...params,
  };

  // Google Analytics 4 (GA4) / GTM
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  // Facebook Pixel (Meta)
  if (typeof window.fbq === 'function') {
    if (eventName === 'InitiateCheckout') {
      window.fbq('track', 'InitiateCheckout', params);
    } else if (eventName === 'Lead') {
      window.fbq('track', 'Lead', params);
    } else {
      window.fbq('trackCustom', eventName, params);
    }
  }

  // Console output for verification
  if (import.meta.env?.DEV) {
    console.log('[Analytics Event Tracked]:', eventPayload);
  }
};
