const prevBtnEl = document.querySelector('.prev');
const nextBtnEl = document.querySelector('.next');
const slides = document.querySelectorAll('.slide');

// First slide by index
let index = 0;
//When next btn is clicked
function nextSlide(){
  index++

  index > slides.length - 1 ? index = 0 : 0;

  slides.forEach(slide => slide.style.display = 'none'); 

  slides[index].style.display = 'flex';
};
// When prev button clicked
function prevSlide(){
  index--

  index < 0 ? index = slides.length - 1 : 0;

  slides.forEach(slide => slide.style.display = 'none');

  slides[index].style.display = 'flex';
}

nextBtnEl.addEventListener('click', nextSlide);
prevBtnEl.addEventListener('click', prevSlide);