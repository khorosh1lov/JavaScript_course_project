import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

function gridTemplate() {
  return `
    <div class="products-grid">
      <div class="products-grid__inner"></div>
    </div>`;
}

export default class ProductGrid {
  constructor(products) {
    this._products = products;
    this._filters = {};
    this._elem = createElement(gridTemplate());
    this.render(this._products);
  }

  get elem() {
    return this._elem;
  }

  render(products) {
    this._inner = this._elem.querySelector('.products-grid__inner');
    this._inner.innerHTML = '';

    for (const product of products) {
      const CardOfProduct = new ProductsWithFilters(product);
      this._inner.append(CardOfProduct.elem);
    }
  }

  updateFilter(filters) {
    Object.assign(this._filters, filters);

    if ("noNuts" in this._filters) {
      const noNutsProducts = this._products.filter(product => product.nuts === this._filters.noNuts);
      this.render([...noNutsProducts]);
    } else {
      this.render(this._products);
    }



    const vegeterianOnlyProducts = this._products.filter(product => product.vegeterian === this._filters.vegeterianOnly);

  }
}

class ProductsWithFilters extends ProductCard {
  constructor({ name, price, category, image, id, vegeterian = false, nuts = false, spiciness = 0 }) {
    super({ name, price, category, image, id });
    this._vegeterian = vegeterian;
    this._nuts = nuts;
    this._spiciness = spiciness;
  }
}

