const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  it('Verifica se quando "getSavedCartItems" é executada, "localStorage.getItem" é chamado', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toBeCalled();
  });
  it('Verifica se quando "getSavedCartItems" é executada, "localStorage.getItem" é chamado com o parâmetro "cartItem"', () => {
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItem');
  });
});
