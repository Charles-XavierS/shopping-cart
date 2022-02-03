require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // implemente seus testes aqui
  it('Verifica se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('Ao chamar a função fetchProducts com o argumento "computador", testa se fetch foi chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('Verifica se fetch foi chamada com o endPoint correto', async () => {
    const endPoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(endPoint);
  });
  it('Verifica se o retorno da função é um objeto igual a computadorSearch', async () => {
    const returnfetch = await fetchProducts('computador');
    expect(returnfetch).toEqual(computadorSearch);
  });
  it('Verifica se ao chamar a função fetchProducts sem argumento, retorna um erro', async () => {
    const results = await fetchProducts();
    const expectedError = new Error('You must provide an url')
    expect(results).rejects.toEqual(expectedError);
  })
});
