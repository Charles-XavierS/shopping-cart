const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  it('Testa se a função saveCartItems for chamada com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toBeCalled();
  });
  it('Verifica se a função saveCartItems for executada com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com os parametros "cartItems" e "o argumento da função", respectivamente', () => {
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItem', '<ol><li>Item</li></ol>');
  });
});
