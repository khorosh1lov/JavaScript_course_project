import createElement from '../../assets/lib/create-element.js';
import escapeHtml from '../../assets/lib/escape-html.js';

import Modal from '../../7-module/2-task/index.js';

export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;

    this.addEventListeners();
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

  addProduct(product) {
    const existingProduct = this._findProductByName(product);
    const cartItem = Object.assign({}, { product: product, count: 1 });

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

    if (existingProduct) { existingProduct.count += amount; } else { return; }
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

  renderProduct(product, count) {
    return `
    <div class="cart-product" data-product-id="${product.id}">
      <div class="cart-product__img">
        <img src="/assets/images/products/${product.image}" alt="product">
      </div>
      <div class="cart-product__info">
        <div class="cart-product__title">${escapeHtml(product.name)}</div>
        <div class="cart-product__price-wrap">
          <div class="cart-counter">
            <button type="button" class="cart-counter__button cart-counter__button_minus">
              <img src="/assets/images/icons/square-minus-icon.svg" alt="minus">
            </button>
            <span class="cart-counter__count">${count}</span>
            <button type="button" class="cart-counter__button cart-counter__button_plus">
              <img src="/assets/images/icons/square-plus-icon.svg" alt="plus">
            </button>
          </div>
          <div class="cart-product__price">€${(product.price * count).toFixed(2)}</div>
        </div>
      </div>
    </div>`;
  }

  renderOrderForm() {
    return `<form class="cart-form">
      <h5 class="cart-form__title">Delivery</h5>
      <div class="cart-form__group cart-form__group_row">
        <input name="name" type="text" class="cart-form__input" placeholder="Name" required value="Santa Claus">
        <input name="email" type="email" class="cart-form__input" placeholder="Email" required value="john@gmail.com">
        <input name="tel" type="tel" class="cart-form__input" placeholder="Phone" required value="+1234567">
      </div>
      <div class="cart-form__group">
        <input name="address" type="text" class="cart-form__input" placeholder="Address" required value="North, Lapland, Snow Home">
      </div>
      <div class="cart-buttons">
        <div class="cart-buttons__buttons btn-group">
          <div class="cart-buttons__info">
            <span class="cart-buttons__info-text">total</span>
            <span class="cart-buttons__info-price">€${this.getTotalPrice().toFixed(2)}</span>
          </div>
          <button type="submit" class="cart-buttons__button btn-group__button button">order</button>
        </div>
      </div>
    </form>`;
  }

  renderModal() {
    let modal = new Modal();
    let products = ``;

    for (const cartItem of this.cartItems) {
      products += this.renderProduct(cartItem.product, cartItem.count);
    }

    modal.setTitle('Your order');
    modal.setBody(createElement(`
    <div>
      ${products}

      ${this.renderOrderForm()}
    </div>`));

    modal.open();

    //// НЕ ПОНЯТНО, когда цеплятб обработчики на кнопки, я тут слегка из за кол-ва методов запутался
    /*
    const plusButton = document.querySelector('cart-counter__button_plus');
    const minusButton = document.querySelector('cart-counter__button_minus');

    plusButton.addEventListener('click', _onPlusButtonClick);
    minusButton.addEventListener('click', _onMinusButtonClick);
    */
  }

  onProductUpdate(cartItem) {
    this.cartIcon.update(this);

    const isModalOpen = document.body.classList.contains('is-modal-open');
    const productId = cartItem.product.id;

    if (isModalOpen) {

      /// ОБЩИЙ КАРКАС сделал, но пока не понятно когда этот метод onProductUpdate() и где вызывать
    }
  }

  onSubmit(event) {
    // ...ваш код
  }

  _onPlusButtonClick = () => {
    console.log('Plus Clicked!');
  }

  _onMinusButtonClick = () => {
    console.log('Minus Clicked!');
  }

  addEventListeners() {
    this.cartIcon.elem.onclick = () => this.renderModal();
  }
}

