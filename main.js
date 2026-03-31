// ── Active nav link by current page ──
(function () {
  const file = window.location.pathname.split('/').pop() || 'index.html';
  const map = { 'index.html': 'nl-home', 'services.html': 'nl-services', 'team.html': 'nl-team', 'contacts.html': 'nl-contacts' };
  const el = document.getElementById(map[file]);
  if (el) el.classList.add('active');
})();

// ── Mobile menu ──
function toggleMenu() {
  document.getElementById('mMenu').classList.toggle('open');
}

// ── Language dropdown ──
function toggleLangDropdown() {
  const dd = document.getElementById('langDropdown');
  if (dd) dd.classList.toggle('open');
}
// Close dropdown when clicking outside
document.addEventListener('click', function (e) {
  const dd = document.getElementById('langDropdown');
  if (dd && !dd.contains(e.target)) dd.classList.remove('open');
});

// ── Scroll reveal ──
function initReveal() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 90);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  els.forEach(el => obs.observe(el));
}
document.addEventListener('DOMContentLoaded', initReveal);
