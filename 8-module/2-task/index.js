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
    this._allProducts = products;
    this._elem = createElement(gridTemplate());
    this._inner = this._elem.querySelector('.products-grid__inner');

    for (const product of products) {
      const CardOfProduct = new ProductsWithFilters(product);

      this._inner.append(CardOfProduct.elem);
    }
  }

  get elem() {
    return this._elem;
  }

  updateFilter({ noNuts = false, vegeterianOnly = false, maxSpiciness = 0, category = '' }) {
    this._noNuts = noNuts;
    this._vegeterianOnly = vegeterianOnly;
    this._maxSpiciness = maxSpiciness;
    this._category = category;

    this._allProducts.forEach(item => {
      if (item.nuts === this._noNuts) { console.log(item); }
      //if (item.vegeterian === this._vegeterianOnly) { console.log(item); }
      //if (item.spiciness <= this._maxSpiciness) { console.log(item); }
      if (item.category === this._category) { console.log(item); }
    });
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

