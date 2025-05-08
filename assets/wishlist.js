/*створила новий js-файл */

function addToWishlist(button) {
  const handle = button.dataset.productHandle;
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  if (!wishlist.includes(handle)) {
    wishlist.push(handle);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert('Додано в бажане!');
  } else {
    alert('Цей товар вже є у списку бажаного!');
  }
}
