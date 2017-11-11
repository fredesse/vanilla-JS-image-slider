let slideIndex = 1;

plusSlides = (n) => {
  showSlides(slideIndex += n);
};

currentSlide = (n) => {
  showSlides(slideIndex = n);
};

showSlides = (n) => {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 };
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
};

showSlides(slideIndex);
