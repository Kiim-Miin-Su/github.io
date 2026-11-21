const toggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');

function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', '메뉴 열기');
  mobileNav.hidden = true;
  document.body.classList.remove('menu-open');
}

toggle.addEventListener('click', () => {
  const opening = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(opening));
  toggle.setAttribute('aria-label', opening ? '메뉴 닫기' : '메뉴 열기');
  mobileNav.hidden = !opening;
  document.body.classList.toggle('menu-open', opening);
});

mobileNav.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});

window.matchMedia('(min-width: 761px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});
