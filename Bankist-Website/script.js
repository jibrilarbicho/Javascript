"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

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
const her = function () {
  alert("Great:You are reading the header");
  h1.removeEventListener("mouseenter", her); //to listen event once only
};
h1.addEventListener("mouseenter", her);
