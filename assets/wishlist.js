/*створила новий js-файл для додавання товару у wishlist*/

document.querySelectorAll('.wishlist-button').forEach((button) => {
  button.addEventListener('click', () => {
    const product = {
      id: button.dataset.productId,
      title: button.dataset.productTitle,
      handle: button.dataset.productHandle,
    };

    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    // перевірка чи вже є
    const exists = wishlist.some((item) => item.id === product.id);
    if (!exists) {
      wishlist.push(product);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
  });
});
