function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  // coloque s código aqui
  event.target.remove();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

// Funções para criar e remover a mensagem de "carregando".
function createLoading() {
  const cart = document.querySelector('.cart');
  const loadingMessage = document.createElement('span');
  loadingMessage.classList.add('loading');
  loadingMessage.innerText = 'Aguarde pequeno Padawan!';
  cart.appendChild(loadingMessage);
}

function removeLoading() {
  document.querySelector('.loading').remove();
}

// Função para criar a lista de produtos
const items = document.querySelector('.items');
const productsList = async (product) => {
  const products = await fetchProducts(product);
  products.results.forEach((item) => {
    const object = {
      sku: item.id,
      name: item.title,
      image: item.thumbnail,
    };
    items.appendChild(createProductItemElement(object));
  });
};

// Função para criar itens no carrinho
const addButton = document.querySelectorAll('.item__add');
const cart = document.querySelector('.cart__items');
const productsCart = async (event) => {
  const item = event.target.parentNode;
  const getSku = getSkuFromProductItem(item);
  const itemsParam = await fetchItem(getSku);
  const object = {
    sku: itemsParam.id,
    name: itemsParam.title,
    salePrice: itemsParam.price,
  };
  cart.appendChild(createCartItemElement(object));
};

window.onload = async () => {
  createLoading();
  await productsList('computador');
  removeLoading();
  addButton.forEach((button) => button.addEventListener('click', productsCart));
};
