(function () {
  const storageKey = 'wisenCart';
  const getCart = () => { try { return JSON.parse(localStorage.getItem(storageKey) || '[]'); } catch { return []; } };
  const setCart = (items) => { localStorage.setItem(storageKey, JSON.stringify(items)); updateCartCount(); };
  const updateCartCount = () => {
    const count = getCart().reduce((acc, item) => acc + item.qty, 0);
    document.querySelectorAll('[data-cart-count]').forEach((el) => { el.textContent = String(count); });
  };
  const addItem = (book) => {
    const cart = getCart();
    const existing = cart.find((item) => item.id === book.id);
    if (existing) existing.qty += book.qty || 1; else cart.push({ ...book, qty: book.qty || 1 });
    setCart(cart);
  };
  const updateQty = (id, qty) => { const cart = getCart().map((item) => item.id === id ? { ...item, qty: Math.max(1, qty) } : item); setCart(cart); };
  const removeItem = (id) => { const cart = getCart().filter((item) => item.id !== id); setCart(cart); };
  const renderCart = () => {
    const holder = document.querySelector('[data-cart-items]');
    const empty = document.querySelector('[data-cart-empty]');
    const subtotalEl = document.querySelector('[data-cart-subtotal]');
    if (!holder || !subtotalEl) return;
    const cart = getCart(); holder.innerHTML = '';
    if (!cart.length) { empty?.classList.remove('hidden'); subtotalEl.textContent = '$0.00'; return; }
    empty?.classList.add('hidden');
    cart.forEach((item) => {
      const row = document.createElement('div');
      row.className = 'grid grid-cols-1 gap-4 border-b border-gray-200 py-5 sm:grid-cols-[120px_1fr_auto]';
      row.innerHTML = `<img src="${item.image}" alt="${item.title}" class="h-28 w-full rounded-sm object-cover"><div><h3 class="font-semibold text-wisen-taupe">${item.title}</h3><p class="text-sm text-wisen-gray">${item.author}</p><p class="mt-2 text-sm font-semibold">$${item.price.toFixed(2)}</p><div class="mt-3 inline-flex items-center border border-gray-300"><button class="px-3 py-1" data-action="dec" data-id="${item.id}">-</button><span class="px-4 text-sm">${item.qty}</span><button class="px-3 py-1" data-action="inc" data-id="${item.id}">+</button></div></div><button class="h-fit rounded-sm bg-red-50 px-3 py-2 text-sm text-red-600" data-action="remove" data-id="${item.id}">Remove</button>`;
      holder.appendChild(row);
    });
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  };
  document.addEventListener('click', (event) => {
    const addBtn = event.target.closest('[data-add-cart]');
    if (addBtn) { addItem({ id: addBtn.dataset.id, title: addBtn.dataset.title, author: addBtn.dataset.author, price: Number(addBtn.dataset.price), image: addBtn.dataset.image, qty: 1 }); return; }
    const actionBtn = event.target.closest('[data-action]'); if (!actionBtn) return;
    const id = actionBtn.dataset.id; const action = actionBtn.dataset.action; const item = getCart().find((i) => i.id === id); if (!item) return;
    if (action === 'inc') updateQty(id, item.qty + 1);
    if (action === 'dec') updateQty(id, item.qty - 1);
    if (action === 'remove') removeItem(id);
    renderCart();
  });
  document.addEventListener('DOMContentLoaded', () => { updateCartCount(); renderCart(); });
  window.WisenCart = { getCart, setCart, addItem, updateQty, removeItem, updateCartCount, renderCart };
})();
