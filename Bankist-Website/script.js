"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const nav = document.querySelector(".nav");
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
// const header = document.querySelector(".header");
// const message = document.createElement("div");

// message.classList.add("cookie-message");
// message.innerHTML =
//   "wel come to Bankist website.<button class=' btn btn--close-cookie'>Got IT<button/>";
// header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));
// header.before(message)
// header.after(message)
// document
//   .querySelector(".btn--close-cookie")
//   .addEventListener("click", function () {
//     // message.remove(); //this is recent method to remove
//     message.parentElement.removeChild(message); //this the method before remove() called DOM traversing
//   });
// CSS variables are equivalent to documentElemnt in js
// document.documentElement.style.setProperty("--color-primary", "orangered");
// const logo = document.querySelector(".nav__logo");
// logo.setAttribute("company", "Bankist");
// console.log(logo.getAttribute("src"));
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
btnScrollTo.addEventListener("click", function () {
  const s1Scords = section1.getBoundingClientRect();
  console.log(s1Scords);
  // window.scrollTo(
  //   s1Scords.left + window.pageXOffset,
  //   s1Scords.top + window.pageYOffset
  // );
  // window.scrollTo({//those tow are the oldest way
  //   left: s1Scords.left + window.pageXOffset,
  //   top: s1Scords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  //// thevmodern way this the following one
  section1.scrollIntoView({ behavior: "smooth" });
});
const h1 = document.querySelector("h1");

// h1.addEventListener("mouseenter", function () {
//   alert("Great:You are reading the header");
// });
// h1.onmouseenter = function () {
//   alert("hello");
// };
//the above two event listener on one elemt are used for wehn we want to add more than one event listener on one
// h1.onmouseenter = function () {
//   alert("hello");
// };
// const her = function () {
//   alert("Great:You are reading the header");
//   h1.removeEventListener("mouseenter", her); //to listen event once only
// };
// h1.addEventListener("mouseenter", her);

// const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   console.log("ki");
//   this.style.backgroundColor = randomColor();
// });
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)}, $ {randomInt(0, 255)})`;
// document.querySelector(".nav___link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector(".nav____links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector(".nav").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// });
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   e.preventDefault();

//   this.style.backgroundColor = randomColor();
//   // e.stopPropagation();// to stop propagation
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   e.preventDefault();

//   this.style.backgroundColor = randomColor();
// });

// document.querySelector(".nav").addEventListener("click", function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = randomColor();
// });
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });
//////Delegation
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
//DOM Traversing
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";
const tabs = document.querySelectorAll(".operations__tab");
const tabContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
tabContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);
  if (!clicked) return;
  tabsContent.forEach((k) => k.classList.remove("operations__content--active"));
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
nav.addEventListener("mouseover", function () {});
nav.addEventListener("mouseover", function () {});
window.addEventListener("scroll", function () {
  const header = document.querySelector(".nav");
  header.classList.toggle("sticky", window.scrollY > 100);
});
const slider = document.querySelector(".slider");
// slider.style.overflow = "visible";
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const maxSlides = slides.length;
const dotContainer = document.querySelector(".dots");
const buttonright = document.querySelector(".slider__btn--right");
const buttonleft = document.querySelector(".slider__btn--left");
const gotoSlide = function (slide) {
  slides.forEach((e, i) => {
    e.style.transform = `translateX(${(i - slide) * 100}%)`;
  });
};
gotoSlide(0);

const nextSlide = function () {
  if (currentSlide === maxSlides - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  gotoSlide(currentSlide);
};
const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlides - 1;
  } else {
    currentSlide--;
  }
  gotoSlide(currentSlide);
};

buttonright.addEventListener("click", nextSlide);
buttonleft.addEventListener("click", prevSlide);
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    prevSlide();
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    nextSlide();
  }
});
