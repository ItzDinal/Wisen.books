(function () {
  const toggle = document.querySelector('[data-mobile-toggle]');
  const drawer = document.querySelector('[data-mobile-drawer]');
  const close = document.querySelector('[data-mobile-close]');
  const backdrop = document.querySelector('[data-mobile-backdrop]');
  if (!toggle || !drawer) return;
  const openMenu = () => { drawer.classList.remove('translate-x-full'); backdrop?.classList.remove('hidden'); document.body.classList.add('overflow-hidden'); };
  const closeMenu = () => { drawer.classList.add('translate-x-full'); backdrop?.classList.add('hidden'); document.body.classList.remove('overflow-hidden'); };
  toggle.addEventListener('click', openMenu);
  close?.addEventListener('click', closeMenu);
  backdrop?.addEventListener('click', closeMenu);
})();
