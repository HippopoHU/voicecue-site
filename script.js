const commerce = window.VOICECUE_COMMERCE || {};
const fallbackCheckout = 'mailto:hello@voicecue.app?subject=VoiceCue%20checkout%20request';
const checkoutUrl = typeof commerce.checkoutUrl === 'string' ? commerce.checkoutUrl.trim() : '';
const liveCheckout = /^https:\/\//i.test(checkoutUrl);

for (const link of document.querySelectorAll('[data-checkout]')) {
  link.href = liveCheckout ? checkoutUrl : fallbackCheckout;
  link.dataset.checkoutState = liveCheckout ? 'live' : 'pending';

  if (!liveCheckout) {
    link.textContent = 'Request purchase access — $49';
    link.title = 'Checkout will open after the Lemon Squeezy store is approved. Contact us to be notified.';
    link.setAttribute('aria-label', 'Request VoiceCue checkout by email');
  }
}
