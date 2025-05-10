/*створила новий js-файл для додавання товару у wishlist*/

document.querySelectorAll('.wishlist-button').forEach((button) => {
  button.addEventListener('click', function () {
    const id = this.dataset.productId;
    const title = this.dataset.productTitle;
    const handle = this.dataset.productHandle;

    // Перевірка на порожні значення
    if (!title || !handle) {
      console.warn('Пропущено товар через відсутність title або handle');
      return;
    }

    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    const exists = wishlist.some((item) => item.handle === handle);
    if (!exists) {
      wishlist.push({ id, title, handle });
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      alert('Товар додано до списку бажаного!');
    } else {
      alert('Товар вже у списку бажаного!');
    }
  });
});
