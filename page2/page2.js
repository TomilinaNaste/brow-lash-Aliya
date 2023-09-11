// const portfolioImages = document.querySelectorAll(".portfolio__image");
// const popupImage = document.querySelector(".popup__image");
// const popupImageElement = document.querySelector(".popup-image");

// portfolioImages.forEach((portfolioImage) => {
//   //открытие поп-апа картинки
//   portfolioImage.addEventListener("click", () => {
//     popupImage.src = portfolioImage.src;
//     popupImage.alt = portfolioImage.alt;
//     openPopup(popupImageElement);
//   });
// });

// popupImage.addEventListener("click", () => {
//   closePopup(popupImageElement)
// });
// const closePopup = function (popup) {
//   popup.classList.remove("popup_open");
//
//};
// const openPopup = function (popupElement) {
//   popupElement.classList.add("popup_open");
// };

const images = document.querySelectorAll(".galary__image");
const popup = document.querySelector(".popup");
const popupImage = document.querySelector(".popup__image");

const openPopup = () => {
  popup.classList.add("popup_open");
}

images.forEach((image) => {
  image.addEventListener("click", () => {
    popupImage.src = image.src;
    popupImage.alt = image.alt;
    openPopup();
  });
});

const closePopup = () => {
  popup.classList.remove("popup_open");
}

popupImage.addEventListener("click", () => {
  closePopup();
})
