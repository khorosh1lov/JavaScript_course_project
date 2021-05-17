import createElement from '../../assets/lib/create-element.js';

const CAROUSEL_IMGS_PATH = '';

function slidesDataTemplate(slides) {
  return slides.map(({ name, id, price, image }) => slideTemplate({ name, id, price, image })).join('');
}

function slideTemplate({ name, id, price, image }) {
  return `
    <div class="carousel__slide" data-id="${id}">
      <img src="/assets/images/carousel/${image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${price.toFixed(2)}</span>
        <div class="carousel__title">${name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>
  `;
}

function carouselContainerTemplate(slides) {
  return `
    ${arrowsTemplate()}
    <div class="carousel__inner">
      ${slides}
    </div>
  `;
}

function arrowsTemplate() {
  return `
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
  `;
}

export default class Carousel {
  constructor(slides) {
    this._slides = slidesDataTemplate(slides);

    this.elem = document.createElement('div');
    this.elem.classList.add('carousel');
    this.elem.innerHTML = carouselContainerTemplate(this._slides);
    this.initCarousel();

    /*this._carousel      = document.querySelector('.carousel__inner');
    this._arrowLeft     = document.querySelector('.carousel__arrow_left');
    this._arrowRight    = document.querySelector('.carousel__arrow_right');
    this._totalSlides   = document.querySelectorAll('.carousel__slide').length;
    this._slidePosition = 0;

    if (this._totalSlides <= 1) { this.disableArrows(this._arrowLeft, this._arrowRight); }

    this.checkSlidePosition();
    this._arrowLeft.addEventListener('click', this.prevSlide);
    this._arrowRight.addEventListener('click', this.nextSlide);*/
  }

  initCarousel() {
    const carousel      = document.querySelector('.carousel__inner');
    const arrowLeft     = document.querySelector('.carousel__arrow_left');
    const arrowRight    = document.querySelector('.carousel__arrow_right');
    const totalSlides   = document.querySelectorAll('.carousel__slide').length;
    let   slidePosition = 0;

    const prevSlide = () => {
      slidePosition--;
      checkSlidePosition();
      shiftSlide();
    };

    const nextSlide = () => {
      slidePosition++;
      checkSlidePosition();
      shiftSlide();
    };

    const checkSlidePosition = () => {
      if (slidePosition === 0) { return disableArrows(arrowLeft); }
      arrowLeft.style.display = '';

      if (slidePosition === totalSlides - 1) { return disableArrows(arrowRight); }
      arrowRight.style.display = '';
    };

    const shiftSlide = () => {
      let shiftIn = -carousel.offsetWidth * slidePosition;
      carousel.style.transform = `translateX(${shiftIn}px)`;
    };

    const disableArrows = (...arrows) => {
      for (let arrow of arrows) {
        arrow.style.display = 'none';
      }
    };

    if (totalSlides <= 1) { disableArrows(arrowLeft, arrowRight); }

    checkSlidePosition();
    arrowLeft.addEventListener('click', prevSlide);
    arrowRight.addEventListener('click', nextSlide);
  }


  /*prevSlide() {
    this._slidePosition--;
    this.checkSlidePosition();
    this.shiftSlide();
  }

  nextSlide() {
    this._slidePosition++;
    this.checkSlidePosition();
    this.shiftSlide();
  }

  checkSlidePosition() {
    if (this._slidePosition === 0) { return this.disableArrows(this._arrowLeft); }
    this._arrowLeft.style.display = '';

    if (this._slidePosition === this._totalSlides - 1) { return this.disableArrows(this._arrowRight); }
    this._arrowRight.style.display = '';
  }

  shiftSlide() {
    let shiftIn = -this._carousel.offsetWidth * this._slidePosition;
    this._carousel.style.transform = `translateX(${shiftIn}px)`;
  }

  disableArrows(...arrows) {
    for (let arrow of arrows) {
      //arrow.style.display = 'none';
    }
  }*/
}
