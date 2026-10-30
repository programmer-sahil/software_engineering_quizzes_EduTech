/**
 * EduTech Instagram Mobile Deep Linking Utility
 * 
 * Directly opens the Instagram native app on mobile devices (iOS / Android),
 * with an automatic fallback to the web browser if the app is not installed.
 */

/**
 * Returns the native app deep-link URI for an Instagram Reel
 * @param {string} shortcode 
 * @returns {string}
 */
export function getInstagramReelAppUrl(shortcode) {
  if (!shortcode) return 'instagram://';
  return `instagram://reel?id=${shortcode}`;
}

/**
 * Returns the native app deep-link URI for an Instagram Profile
 * @param {string} username 
 * @returns {string}
 */
export function getInstagramProfileAppUrl(username = 'code_scholar_ai') {
  return `instagram://user?username=${username}`;
}

/**
 * Checks if the current user agent is on a mobile device
 * @returns {boolean}
 */
export function isMobileDevice() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;
  return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Opens an Instagram Reel directly in the mobile app if installed,
 * falling back gracefully to the web URL if the app is absent or on desktop.
 * 
 * @param {string} shortcode - Instagram shortcode (e.g. "De1Dg5Myz9n")
 * @param {string} webUrl - Full web fallback URL (e.g. "https://www.instagram.com/reel/De1Dg5Myz9n/")
 * @param {Event} [e] - Optional click event to preventDefault
 */
export function openInstagramReel(shortcode, webUrl, e) {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }

  const targetWebUrl = webUrl || `https://www.instagram.com/reel/${shortcode}/`;

  if (isMobileDevice()) {
    const appUrl = getInstagramReelAppUrl(shortcode);
    const startTime = Date.now();

    // Trigger deep link scheme to launch the native Instagram app
    window.location.href = appUrl;

    // Fallback: If after 1.2s the document is still visible, the app didn't intercept it
    setTimeout(() => {
      if (!document.hidden && Date.now() - startTime < 2500) {
        window.open(targetWebUrl, '_blank', 'noopener,noreferrer');
      }
    }, 1200);
  } else {
    // Desktop: Open in new browser tab
    window.open(targetWebUrl, '_blank', 'noopener,noreferrer');
  }
}

/**
 * Opens an Instagram Profile directly in the mobile app with web fallback
 * 
 * @param {string} username - Instagram username (e.g. "code_scholar_ai")
 * @param {string} webUrl - Web fallback URL
 * @param {Event} [e] - Optional click event
 */
export function openInstagramProfile(username = 'code_scholar_ai', webUrl, e) {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }

  const targetWebUrl = webUrl || `https://www.instagram.com/${username}/`;

  if (isMobileDevice()) {
    const appUrl = getInstagramProfileAppUrl(username);
    const startTime = Date.now();

    window.location.href = appUrl;

    setTimeout(() => {
      if (!document.hidden && Date.now() - startTime < 2500) {
        window.open(targetWebUrl, '_blank', 'noopener,noreferrer');
      }
    }, 1200);
  } else {
    window.open(targetWebUrl, '_blank', 'noopener,noreferrer');
  }
}

