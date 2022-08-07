let section1 = document.querySelector(".section1");
let levels = document.querySelectorAll(".level");
let slideIndex = 0;
showSlides();

function showSlides() {
  
  for (let i = 0; i < slideIndex; i++) {
    levels[i].style.backgroundColor = "transparent";
    
  }
  if (slideIndex > 2) {slideIndex = 0}
  section1.style.animation = "fade 2s";
  section1.style.backgroundImage = "url('./img/index/car"+slideIndex+".svg')";
  levels[slideIndex].style.backgroundColor = "#FFF";
  slideIndex++;
  setTimeout(showSlides, 7000); // Change image every 2 seconds
}