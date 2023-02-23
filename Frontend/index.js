
// ========================================================= Slider js code present here =================================================
const sliderWrapper = document.querySelector('.slider-wrapper');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slideIndex = 0;

prevBtn.addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = sliderWrapper.children.length - 3; /* adjust this value to change the number of images displayed */
  }
  sliderWrapper.style.transform = `translateX(-${slideIndex * (100 / 3)}%)`; /* adjust this value to change the number of images displayed */
});

nextBtn.addEventListener('click', () => {
  slideIndex++;
  if (slideIndex >= sliderWrapper.children.length - 2) { /* adjust this value to change the number of images displayed */
    slideIndex = 0;
  }
  sliderWrapper.style.transform = `translateX(-${slideIndex * (100 / 3)}%)`; /* adjust this value to change the number of images displayed */
});

