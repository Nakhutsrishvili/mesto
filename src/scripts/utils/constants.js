//Загружаем массив с карточками, у которого внутри объекты с свойствами.
const initialCards = [
  {
    title: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    title: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    title: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    title: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    title: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    title: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const editButtonElement = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const selectorTemplate = "#element";
const popupProfileSelector =".popup_edit-profile";
const popupAddCardsSelector = ".popup_add-cards"
const popupImageSelector = ".popup_image";
const elementLists = ".elements";
const configInfo = {
  profileNameElementSelector: ".profile__name",
  profileJobElementSelector: ".profile__about"
}
const validationElement = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "form__submit-button_disabled", // неактивная кнопка
  inputErrorClass: "form__input_type_error", // поддчеркивание красным
  errorClass: "form__error_visible", //
};

export{
  initialCards,
  editButtonElement,
  profileAddButton,
  selectorTemplate,
  popupProfileSelector,
  popupAddCardsSelector,
  popupImageSelector,
  elementLists,
  configInfo,
  validationElement
}

