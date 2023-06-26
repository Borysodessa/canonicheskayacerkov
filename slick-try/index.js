const link = document.querySelector(".schedule-btn");
const popap = document.querySelector(".modal-schedule");
const closePopap = document.querySelector(".modal-close");
const overlay = document.querySelector(".overlay");
const ukraine = document.querySelector(".ukraine");
const eparchysUkrainWrap = document.querySelector(".eparchys-Ukrain__wrap");
const eparchysUkrainClose = document.querySelector(".eparchys-Ukrain-close");

ukraine.addEventListener("click", function (evt) {
  evt.preventDefault();
  eparchysUkrainWrap.classList.remove("visually-hidden");
  overlay.classList.remove("visually-hidden");
});

eparchysUkrainClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  eparchysUkrainWrap.classList.add("visually-hidden");
  overlay.classList.add("visually-hidden");
});

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
  eparchysUkrainWrap.classList.add("visually-hidden");
  popap.classList.add("visually-hidden");
  overlay.classList.add("visually-hidden");
});
