const saveCartItems = (item) => {
  // seu código aqui
  localStorage.setItem('cartItem', item);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
