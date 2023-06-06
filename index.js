const link = document.querySelector('.schedule-btn');
const popap = document.querySelector('.modal-schedule');
const closePopap = document.querySelector(".modal-close");
const linkLives = document.querySelector('.lives-btn');
const popapLives = document.querySelector('.lives-saints');
const closePopapLives = document.querySelector(".lives-modal-close");

link.addEventListener("click", function (evt) {
    evt.preventDefault(evt);
    popap.classList.remove('visually-hidden');
});

closePopap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popap.classList.add("visually-hidden");
});


// linkLives.addEventListener("click", function (evt) {
//     evt.preventDefault(evt);
//     popapLives.classList.remove('visually-hidden');
// });

// closePopapLives.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   popapLives.classList.add("visually-hidden");
// });