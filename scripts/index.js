//Объявляем переменные для создания карточек
const elementsList = document.querySelector(".elements");
const templateElement = document.getElementById("element").content;

//Загружаем массив с карточками, у которого внутри объекты с свойствами.
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

// Добавляем карточку (клонируем и привязываем ссылки и текст)
function addCards(item) {
  const cloneElement = templateElement.querySelector(".element").cloneNode(true);
  cloneElement.querySelector(".element__image").src = item.link;
  cloneElement.querySelector(".element__group-title").textContent = item.name;
  cloneElement.querySelector(".element__image").alt = item.name;


//Функиця лайк
  cloneElement.querySelector(".element__group-like").addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__group-like_active");
    });
  cloneElement.querySelector(".element__group-delete").addEventListener("click", handleDelete);


//Функция открытия картинки
  cloneElement.querySelector(".element__image").addEventListener("click", () => {
      openImage(item);
    });
  return cloneElement;
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
  const cards = addCards(item);
  elementsList.append(cards);
});


//Удаление карточки
const elementGroupDelete = document.querySelector(".element__group-delete");
function handleDelete(evt) {
  const card = evt.target.closest(".element");
  card.remove();
}

//Константы для Попапа
const popupEditProfile = document.querySelector(".popup_edit-profile");
const popupAddCards = document.querySelector(".popup_add-cards");
const popupImage = document.querySelector(".popup_image");
const closeButtons = document.querySelectorAll(".popup__close");
const editButtonElement = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const nameElement = document.querySelector(".profile__name");
const jobElement = document.querySelector(".profile__about");
const formElement = document.querySelector(".form");
const profileNameInput = document.getElementById("name");
const profileJobInput = document.getElementById("job");
const formNameInput = document.getElementById("title");
const formSrcInput = document.getElementById("src");
const popupPopupImage = document.querySelector(".popup__popup-image");
const popupImageCaption = document.querySelector(".popup__image-caption");


// Константы для Submit
const documentForms = document.forms; // Нашел все формы
const loginProfileForm = document.forms.profileForm;
const loginAddCardsForm = document.forms.addCardsForm;


//Константы для сброса Input и Button (из глобальной области видимости, т.к. они не доступны нам из Validates)
const inputListProfileForm = loginProfileForm.querySelectorAll(".form__input");
const inputListAddCardsForm = loginAddCardsForm.querySelectorAll(".form__input");
const butonSubmitProfileForm = loginProfileForm.querySelector(
  ".form__submit-button"
);
const butonSubmitAddCardsForm = loginAddCardsForm.querySelector(
  ".form__submit-button"
);


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
  resetErrorForm(loginProfileForm); // при невалидных инпутах сбрасываем ошибки при закрытии попапа*/
  activateButton(                   // при не прохождении валидации инпутов делает неактивной кнопку
    inputListProfileForm,
    butonSubmitProfileForm,
    validationElement.inactiveButtonClass);
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
  elementsList.prepend(addCards(newCard));
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
  resetErrorForm(loginAddCardsForm); //при невалидных инпутах сбрасываем ошибки
  activateButton(                   // при не прохождении валидации инпутов делает неактивной кнопку
    inputListAddCardsForm,
    butonSubmitAddCardsForm,
    validationElement.inactiveButtonClass
  );
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
