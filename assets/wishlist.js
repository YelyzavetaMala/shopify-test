/*створила новий js-файл для додавання товару у wishlist*/

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.wishlist-button');

  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      const productId = this.dataset.productId;
      const productTitle = this.dataset.productTitle;
      const productHandle = this.closest('a')?.getAttribute('href')?.replace('/products/', '') || '';

      let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

      // Уникнення дублів
      const exists = wishlist.some((item) => item.id === productId);
      if (!exists) {
        wishlist.push({ id: productId, title: productTitle, handle: productHandle });
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        alert('Додано до списку бажаного!');
      } else {
        alert('Товар вже в списку бажаного');
      }
    });
  });
});
