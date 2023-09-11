const images = document.querySelectorAll(".galary__image");
const popup = document.querySelector(".popup");
const popupImage = document.querySelector(".popup__image");

const openPopup = () => {
  popup.classList.add("popup_open");
};

images.forEach((image) => {
  image.addEventListener("click", () => {
    popupImage.src = image.src;
    popupImage.alt = image.alt;
    openPopup();
  });
});

const closePopup = () => {
  popup.classList.remove("popup_open");
};

popupImage.addEventListener("click", () => {
  closePopup();
});

const browButton = document.getElementById("brow");
