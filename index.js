const carouselItems = document.querySelectorAll(".portfolio__images");
carouselItems.forEach((carousel) => {
  let isDragStart = false;
  let prevPageX;
  let prevScrollLeft;

  const dragStart = (e) => {
    //oбновление значения глобальных переменных при событии нажатия мыши
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    //прокрутка изображения влево по указателю мыши
    if (!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
  };

  const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
  };

  const openLink = (e) => {
    e.preventDefault();
    const lastElement = carousel.lastElementChild;
    const link = lastElement.getAttribute("data-link");
    if (link) {
      window.open(link, "_blank");
    }
  };

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("touchstart", dragStart);
  carousel.addEventListener("mousemove", dragging);
  carousel.addEventListener("touchmove", dragging);
  carousel.addEventListener("mouseup", dragStop);
  carousel.addEventListener("touchend", dragStop);
  carousel.addEventListener("touchcancel", dragStop);
  carousel.lastElementChild.addEventListener("click", openLink);
});

const openPopup = function (popupElement) {
  popupElement.classList.add("popup_open");
};

const portfolioImages = document.querySelectorAll(".portfolio__image");
const popupImage = document.querySelector(".popup__image");
const popupImageElement = document.querySelector(".popup-image");

portfolioImages.forEach((portfolioImage) => {
  //открытие поп-апа картинки
  portfolioImage.addEventListener("click", () => {
    popupImage.src = portfolioImage.src;
    popupImage.alt = portfolioImage.alt;
    openPopup(popupImageElement);
  });
});


popupImage.addEventListener("click", () => {
  closePopup(popupImageElement)
});
const closePopup = function (popup) {
  popup.classList.remove("popup_open");
};
