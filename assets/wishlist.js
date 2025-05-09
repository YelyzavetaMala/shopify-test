/*створила новий js-файл для додавання товару у wishlist*/

document.addEventListener('DOMContentLoaded', function () {
  const wishlistButtons = document.querySelectorAll('.wishlist-button');

  wishlistButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      const productTitle = button.dataset.productTitle;

      // Отримую поточний список
      let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

      // Перевіряю чи товар вже доданий
      const exists = wishlist.find((item) => item.id === productId);
      if (!exists) {
        wishlist.push({ id: productId, title: productTitle });
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        alert(`Додано "${productTitle}" до списку бажаного!`);
      } else {
        alert(`"${productTitle}" вже у списку бажаного!`);
      }
    });
  });
});
