export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    let AddProduct = Object.assign({}, product);
    this.cartItems.push(AddProduct);

    this.onProductUpdate();
  }

  updateProductCount(productId, amount) {
    // ваш код
  }

  isEmpty() {
    return this.cartItems.length === 0;
  }

  getTotalCount() {
    return this.cartItems.length;
  }

  getTotalPrice() {
    return this.cartItems.reduce((totalPrice, product) => totalPrice + product.price, 0);
  }

  onProductUpdate() {
    // реализуем в следующей задаче

    console.log(this.cartItems);

    this.cartIcon.update(this);
  }
}

