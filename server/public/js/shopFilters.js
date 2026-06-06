(function () {
  const filterToggle = document.querySelector('[data-filter-toggle]');
  const filterSidebar = document.querySelector('[data-filter-sidebar]');
  if (filterToggle && filterSidebar) {
    filterToggle.addEventListener('click', () => { filterSidebar.classList.toggle('hidden'); });
  }
  const searchInput = document.querySelector('[data-shop-search]');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim().toLowerCase();
      document.querySelectorAll('[data-book-card]').forEach((card) => {
        const title = card.dataset.title.toLowerCase();
        const author = card.dataset.author.toLowerCase();
        card.classList.toggle('hidden', !(title.includes(query) || author.includes(query)));
      });
    });
  }
})();
