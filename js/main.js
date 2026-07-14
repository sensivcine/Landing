// Sensiv Cinematics — site scripts
// The scrolling ticker and pulse dot are handled in CSS.
// This file is here as a place to hook up real functionality later,
// e.g. a contact form handler, analytics, or live session data.

document.addEventListener('DOMContentLoaded', () => {
  // Smooth-scroll is already handled via CSS `scroll-behavior: smooth`
  // and the in-page anchor links in the nav.

  // Example hook: log when a work card is clicked (replace with real links)
  document.querySelectorAll('.work-card').forEach((card) => {
    card.addEventListener('click', () => {
      const title = card.querySelector('h3')?.textContent;
      console.log('Work card clicked:', title);
    });
  });
});
