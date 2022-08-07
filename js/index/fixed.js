const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const backTop = document.querySelector(".section5-btn");


window.addEventListener('scroll', e=> {
  
  if (window.scrollY > header.clientHeight) {
    nav.classList.add("fixed")
  } else {
    nav.classList.remove("fixed");
  }

})

backTop.onclick = function (e) {
  window.scrollTo(0, 0)
}