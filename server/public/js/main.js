(function () {
  const nav = document.querySelector('[data-navbar]');
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 14) {
      nav.classList.add('shadow-md', 'bg-[#8CC0EB]', 'backdrop-blur');
      nav.classList.remove('bg-white', 'bg-white/95');
    } else {
      nav.classList.remove('shadow-md', 'bg-white', 'bg-white/95', 'backdrop-blur');
      nav.classList.add('bg-[#8CC0EB]');
    }
  };
  onScroll();
  window.addEventListener('scroll', onScroll);
})();
