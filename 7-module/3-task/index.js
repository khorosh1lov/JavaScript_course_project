import createElement from '../../assets/lib/create-element.js';

const SLIDER_CHANGE = 'slider-change';

function sliderTemplate(steps, value) {
  return `
    <div class="slider">
      <div class="slider__thumb">
        <span class="slider__value">${value}</span>
      </div>

      <div class="slider__progress"></div>

      <div class="slider__steps">
        ${stepsBuilder(steps)}
      </div>
    </div>
  `;
}

function stepsBuilder(steps) {
  let sliderSteps = ``;

  for (let i = 0; i < steps; i++) {
    sliderSteps += `<span data-step=${i}></span>`;
  }

  return sliderSteps;
}

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this._totalSteps = steps;
    this._startValue = value;
    this._elem       = createElement(sliderTemplate(this._totalSteps, this._startValue));

    this._allSteps   = this._elem.querySelectorAll('[data-step]');
    this._value      = this.elem.querySelector('.slider__value');
    this._thumb      = this.elem.querySelector('.slider__thumb');
    this._progress   = this._elem.querySelector('.slider__progress');
    this._segments   = this._totalSteps - 1;

    // Init values for Slider
    this._firstStep = this._allSteps[0].classList.add('slider__step-active');
    this._thumb.style.left = '0%';
    this._progress.style.width = '0%';

    // Listen Click
    this._elem.addEventListener('click', this._onSliderClick);
  }

  get elem() {
    return this._elem;
  }

  _onSliderClick = (e) => {
    const sliderPositionClicked = e.clientX - this._elem.getBoundingClientRect().left;
    const currentValue = Math.round((sliderPositionClicked / this._elem.offsetWidth) * this._segments);
    const currentValueInPercents = (currentValue / this._segments) * 100;
    const activeStep = this._elem.querySelector(`[data-step="${currentValue}"]`);

    this._allSteps.forEach(activeStep => { activeStep.classList.remove('slider__step-active'); });
    activeStep.classList.add('slider__step-active');

    this._value.innerHTML = currentValue;
    this._thumb.style.left = `${currentValueInPercents}%`;
    this._progress.style.width = `${currentValueInPercents}%`;

    let event = new CustomEvent(SLIDER_CHANGE, {
      detail: currentValue,
      bubbles: true
    });
    this._elem.dispatchEvent(event);
  }
}
