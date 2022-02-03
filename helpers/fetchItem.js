const fetchItem = async (itemId) => {
  // seu código aqui
  if (!itemId) throw new Error('You must provide an url');
  const url = `https://api.mercadolibre.com/items/${itemId}`;
  const results = await fetch(url);
  const data = await results.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
