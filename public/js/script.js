//===============header-scroll===============

const send = document.getElementById("send");
send.addEventListener("click", () => {
  alert('Habar ugradyly');
  location.reload();
}, false)

var className = "scroll";
var scrollTrigger = 100;

window.onscroll = function () {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.querySelector(".header").classList.add(className);
  } else {
    document.querySelector(".header").classList.remove(className);
  }
};

// burger-menu
const burgerButton = document.querySelector(".header__burger");
const header = document.querySelector(".header");
const body = document.body;
burgerButton.addEventListener("click", () => {
  header.classList.toggle("active");
  body.classList.toggle("_lock");
  burgerButton.classList.toggle("active");
}, false);
// burger-menu

const popup = document.querySelector(".popup");
const btn = document.querySelectorAll(".products-magro__button");
const closePopup = document.querySelector(".popup__close");
closePopup.addEventListener("click", () => {
  popup.classList.remove("active");
  document.body.classList.contains("_lock") &&
    document.body.classList.remove("_lock");
}, false);
btn.forEach((element) => {
  element.addEventListener("click", () => {
    popup.classList.add("active");
    document.body.classList.add("_lock");
  }, false);
});
