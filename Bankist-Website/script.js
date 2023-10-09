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
const header = document.querySelector(".header");
const message = document.createElement("div");

message.classList.add("cookie-message");
message.innerHTML =
  "wel come to Bankist website.<button class=' btn btn--close-cookie'>Got IT<button/>";
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
// header.before(message)
// header.after(message)
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    // message.remove(); //this is recent method to remove
    message.parentElement.removeChild(message); //this the method before remove() called DOM traversing
  });
