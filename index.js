const link = document.querySelector(".schedule-btn");
const popap = document.querySelector(".modal-schedule");
const closePopap = document.querySelector(".modal-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault(evt);
  popap.classList.remove("visually-hidden");
});

closePopap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popap.classList.add("visually-hidden");
});
