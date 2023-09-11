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
const lashButton = document.getElementById("lash");
const browImages = document.querySelector(".galary__brow");
const lashImages = document.querySelector(".galary__lash");

// Добавляем обработчик событий к родительскому элементу
document.addEventListener("click", (event) => {
  // Проверяем, была ли нажата кнопка
  if (event.target.matches("#brow, #lash")) {
    // Переключаем классы активности кнопок
    browButton.classList.toggle("galary__button_active", event.target.id === "brow");
    lashButton.classList.toggle("galary__button_active", event.target.id === "lash");

    // Переключаем классы активности изображений
    browImages.classList.toggle("galary__disable", event.target.id === "lash");
    lashImages.classList.toggle("galary__disable", event.target.id === "brow");
  }
});
