let section1 = document.querySelector(".section");
let levels = document.querySelectorAll(".level");

let slideIndex = 0;
let timer = null;

showSlides();

for (let i = 0; i < levels.length; i++) {
  levels[i].onclick = () => {
    slideIndex = i;
    rested(levels.length);
    clearTimeout(timer)
    showSlides();
  }
}

function showSlides() {
  rested(slideIndex);
  if (slideIndex > 2) {slideIndex = 0}
  section1.style.animation = "fade 2s";
  section1.style.backgroundImage = "url('./img/car"+slideIndex+".svg')";
  levels[slideIndex].style.backgroundColor = "#FFF";
  slideIndex++;
  timer = setTimeout(showSlides, 7000); // Change image every 2 seconds
}

function rested(length) {
  for (let i = 0; i < length; i++) {
    levels[i].style.backgroundColor = "transparent";
  }
}
