require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  // implemente seus testes aqui
  it('Verifica se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('Ao chamar a função fetchItem com o argumento "MLB1341706310", testa se fetch foi chamada', async () => {
    await fetchItem('MLB1341706310');
    expect(fetch).toHaveBeenCalled();
  });
  it('Verifica se fetch foi chamada com o endPoint correto', async () => {
    const endPoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1341706310');
    expect(fetch).toHaveBeenCalledWith(endPoint);
  });
  it('Verifica se o retorno da função é um objeto igual a computadorSearch', async () => {
    const returnfetch = await fetchItem('MLB1341706310');
    expect(returnfetch).toEqual(item);
  });
  it('Verifica se ao chamar a função fetchItem sem argumento, retorna um erro', async () => {
    const results = await fetchItem();
    const expectedError = new Error('You must provide an url')
    expect(results).rejects.toEqual(expectedError);
  })
});
