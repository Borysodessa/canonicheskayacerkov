const link = document.querySelector(".schedule-btn");
const popap = document.querySelector(".modal-schedule");
const closePopap = document.querySelector(".modal-close");
const overlay = document.querySelector(".overlay");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popap.classList.remove("visually-hidden");
  overlay.classList.remove("visually-hidden");
});

closePopap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popap.classList.add("visually-hidden");
  overlay.classList.add("visually-hidden");
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  popap.classList.add("visually-hidden");
  overlay.classList.add("visually-hidden");
});
