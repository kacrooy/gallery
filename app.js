const THUMBNAIL = document.querySelectorAll(".thumbnail img");
const POPUP = document.querySelector(".popup");
const POPUP__CLOSE = document.querySelector(".popup__close");

THUMBNAIL.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    console.log(thumbnail);
    POPUP.classList.remove("hidden");
  });
});

POPUP__CLOSE.addEventListener("click", () => {
  POPUP.classList.add("hidden");
});
