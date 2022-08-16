const header = document.querySelector(".header");
const nav = document.querySelector(".nav");

window.addEventListener('scroll', e=> {
  
  if (window.scrollY > header.clientHeight) {
    nav.classList.add("fixed")
  } else {
    nav.classList.remove("fixed");
  }

})
// let a = document.querySelectorAll("a");

// for (let i = 0; i < a.length; i++) {
//   a[i].onclick = function (event) {
//     event.preventDefault();
//     window.location.assign(event.target.href)
//   }
// }