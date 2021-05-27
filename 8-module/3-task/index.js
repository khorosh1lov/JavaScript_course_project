export default class Cart {
  cartItems = []; // [ product: {...}, count: N ]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    const existingProduct = this._findProductByName(product);
    const cartItem = { product: product, count: 1 };

    if (!existingProduct) {
      this.cartItems.push(cartItem);
    } else {
      existingProduct.count++;
    }

    this.onProductUpdate(cartItem);
  }

  updateProductCount(productId, amount) {
    const existingProduct = this._findProductById(productId);
    const indexOfExistingProduct = this._findProductIndexById(productId);

    if (!existingProduct) { return; } else { existingProduct.count += amount; }
    if (existingProduct.count === 0) { this.cartItems.splice(indexOfExistingProduct, 1); }

    this.onProductUpdate(existingProduct);
  }

  isEmpty() {
    return this.cartItems.length === 0;
  }

  getTotalCount() {
    return this.cartItems.reduce((total, item) => total + item.count, 0);
  }

  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + (item.product.price * item.count), 0);
  }

  onProductUpdate() {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }

  _findProductByName = (product) => {
    return this.cartItems.find(item => item.product.name === product.name);
  };

  _findProductById = (productId) => {
    return this.cartItems.find(item => item.product.id === productId);
  };

  _findProductIndexById = (productId) => {
    return this.cartItems.findIndex(item => item.product.id === productId);
  };
}

