const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
function closeMenu() {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation');
}
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    closeMenu();
    toggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
// Keep Research selected throughout its subsections, including direct anchor jumps.
const sectionLinks = [...nav.querySelectorAll('a[href^="#"]')].map(link => ({
  link,
  section: document.querySelector(link.hash)
}));
function updateCurrentSection() {
  const threshold = document.querySelector('.site-header').getBoundingClientRect().bottom + 24;
  let current;
  sectionLinks.forEach(item => {
    if (item.section.getBoundingClientRect().top <= threshold) current = item.link;
  });
  sectionLinks.forEach(({ link }) => {
    if (link === current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
let navUpdatePending = false;
function scheduleNavUpdate() {
  if (navUpdatePending) return;
  navUpdatePending = true;
  requestAnimationFrame(() => {
    navUpdatePending = false;
    updateCurrentSection();
  });
}
window.addEventListener('scroll', scheduleNavUpdate, { passive: true });
window.addEventListener('resize', scheduleNavUpdate);
window.addEventListener('hashchange', scheduleNavUpdate);
window.addEventListener('load', scheduleNavUpdate);
updateCurrentSection();

// Keep the reader's attention on one microscopy movie at a time.
const movies = [...document.querySelectorAll('video')];
movies.forEach(movie => {
  movie.addEventListener('play', () => {
    movies.forEach(other => { if (other !== movie) other.pause(); });
  });
});
