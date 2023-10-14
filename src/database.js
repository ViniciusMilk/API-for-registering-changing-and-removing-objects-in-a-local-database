const sequence = {
  _id: 0,
  get id() {
    return this._id++;
  },
};

const products = {};

function saveProduct(product) {
  if (!product.id) {
    product.id = sequence.id;
  }
  products[product.id] = product;
  return product;
}

function getProduct(id) {
  return products[id] || {};
}

function getProducts() {
  return Object.values(products);
}

function deleteProduct(id) {
  if (products[id]) {
    const product = products[id];
    delete products[id];
    return product;
  } else {
    return {};
  }
}

function deletedb() {
  if (products != {}) {
    for (var prop in products) {
      delete products[prop]; // Remove cada propriedade do objeto
    }
    return products;
  } else {
    return products;
  }
}

module.exports = {
  saveProduct,
  getProduct,
  getProducts,
  deleteProduct,
  deletedb,
};
