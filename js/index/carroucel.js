let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let sections = document.querySelectorAll(".section1");
  for (i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > sections.length) {slideIndex = 1}
  sections[slideIndex-1].style.display = "flex";
  setTimeout(showSlides, 7000); // Change image every 2 seconds
}