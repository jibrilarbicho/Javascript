const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
let showmodal = document.querySelectorAll(".show-modal");
for (let i = 0; i < showmodal.length; i++)
  showmodal[i].addEventListener("click", function () {
    console.log("Button clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

const close = document.querySelector(".close-modal");

close.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
    }
  }
});
