const slides = document.getElementsByClassName("slides-batman");
const dots = document.getElementsByClassName("dot");
let slideIndex = 1;

navigateSlider = (n) => {
  showSlide(slideIndex += n);
};

currentSlide = (n) => {
  showSlide(n);
};

showSlide = (n) => {
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
};

showSlide(slideIndex);
