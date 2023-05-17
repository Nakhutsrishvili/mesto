import initialCards from "./scripts/constants.js";
import Card from "./scripts/Card.js";
import FormValidator from "./scripts/FormValidator.js";
import "./pages/index.css";

// Константы общие
const selectorTemplate = "#element";
const elementsList = document.querySelector(".elements");
const popupEditProfile = document.querySelector(".popup_edit-profile");
const popupAddCards = document.querySelector(".popup_add-cards");
const popupImage = document.querySelector(".popup_image");
const closeButtons = document.querySelectorAll(".popup__close");
const editButtonElement = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const nameElement = document.querySelector(".profile__name");
const jobElement = document.querySelector(".profile__about");
const profileNameInput = document.getElementById("name");
const profileJobInput = document.getElementById("job");
const formNameInput = document.getElementById("title");
const formSrcInput = document.getElementById("src");
const popupPopupImage = document.querySelector(".popup__popup-image");
const popupImageCaption = document.querySelector(".popup__image-caption");

// Константы для Submit
const loginProfileForm = document.forms.profileForm;
const loginAddCardsForm = document.forms.addCardsForm;

// Константы для валидации
const validationElement = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "form__submit-button_disabled", // неактивная кнопка
  inputErrorClass: "form__input_type_error", // поддчеркивание красным
  errorClass: "form__error_visible", //
};

// Добавляем карточку (клонируем и привязываем ссылки и текст)
function addNewCards(item) {
  const cards = new Card (item, selectorTemplate, openImage);
  const elementCard = cards.addCards();
  return elementCard;
}

//Функция открытия картинки
function openImage(item) {
  popupPopupImage.src = item.link;
  popupImageCaption.textContent = item.name;
  popupPopupImage.alt = item.name;
  showPopup(popupImage);
}

//Перебираем массив и говорим,что нужно сделать с каждыи item каждого объекта массива
initialCards.forEach((item) => {
  elementsList.append(addNewCards(item));
});

//Удаление карточки
const elementGroupDelete = document.querySelector(".element__group-delete");
function handleDelete(evt) {
  const card = evt.target.closest(".element");
  card.remove();
}

//создаем экземпляр для формы профайла + запуск валидации формы
const formProfileValidator = new FormValidator(validationElement, loginProfileForm);
console.log(formProfileValidator)
formProfileValidator.enableValidation()

//создаем экземпляр для формы добавления карточки + запуск валидации формы
const formAddCardsValidator = new FormValidator(validationElement, loginAddCardsForm);
console.log(formAddCardsValidator)
formAddCardsValidator.enableValidation()

// Попап для профиля
function showPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
}

editButtonElement.addEventListener("click", () => {
  formProfileValidator.resetErrorForm(); // при невалидных инпутах сбрасываем ошибки при закрытии попапа*/
  profileNameInput.value = nameElement.textContent;
  profileJobInput.value = jobElement.textContent;
  showPopup(popupEditProfile);
});

// Сабмит для профайла
loginProfileForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  nameElement.textContent = profileNameInput.value;
  jobElement.textContent = profileJobInput.value;
  closePopup(popupEditProfile);
});

//  Сабмит для карточек + добавление карточки
loginAddCardsForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newCard = { name: formNameInput.value, link: formSrcInput.value };
  elementsList.prepend(addNewCards(newCard));
  closePopup(popupAddCards);
  evt.target.reset();
});

// Закртытие попапа
closeButtons.forEach((element) => {
  const popup = element.closest(".popup");
  element.addEventListener("click", function () {
    closePopup(popup);
  });
});

// Попап для добавления карточки
profileAddButton.addEventListener("click", () => {
  loginAddCardsForm.reset();
 formAddCardsValidator.resetErrorForm(); //при невалидных инпутах сбрасываем ошибки
    showPopup(popupAddCards);
});

// Универсальная кнопка закрытия попапа при нажатии на Escape
function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);}
}

// Закрытие по Overlay
popupEditProfile.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(popupEditProfile);
  }
});

popupAddCards.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(popupAddCards);
  }
});

popupImage.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(popupImage);
  }
});
