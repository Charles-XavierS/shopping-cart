const getSavedCartItems = () => {
  // seu código aqui
  localStorage.getItem('cartItem');
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
