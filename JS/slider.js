const slides = document.getElementsByClassName("slides-batman");
const dots = document.getElementsByClassName("dot");
let imgIndex = 1;

navigateImages = (n) => {
  showImage(imgIndex += n);
};

currentImage = (n) => {
  showImage(imgIndex = n);
};

showImage = (n) => {
  if (n > slides.length) { imgIndex = 1; }
  if (n < 1) { imgIndex = slides.length; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[imgIndex - 1].style.display = "block";
  dots[imgIndex - 1].className += " active";
};

showImage(imgIndex);
