function initCarousel() {
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


