const header = document.querySelector(".header");
const nav = document.querySelector(".nav");

window.addEventListener('scroll', e=> {
  
  if (window.scrollY > header.clientHeight) {
    nav.classList.add("fixed")
  } else {
    nav.classList.remove("fixed");
  }

})