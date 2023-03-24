//Объявляем переменные для создания карточек
const elementsList = document.querySelector('.elements');
const templateElement = document.getElementById('element').content;

//Загружаем массив с карточками, у которого внутри объекты с свойствами.
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Добавляем карточку (клонируем и привязываем ссылки и текст)
function addCards (item) {
const cloneElement = templateElement.querySelector('.element').cloneNode (true);
      cloneElement.querySelector('.element__image').src = item.link;
      cloneElement.querySelector('.element__group-title').textContent = item.name;
      cloneElement.querySelector('.element__image').alt = item.name;
//Функиця лайк
      cloneElement.querySelector('.element__group-like').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__group-like_active')});
      cloneElement.querySelector('.element__group-delete').addEventListener('click',handleDelete);

//Функция открытия картинки
cloneElement.querySelector('.element__image').addEventListener('click', ()=> {
      openImage(item)
      });

return cloneElement;
}

//Функция открытия картинки
function openImage(item){
      popupPopupImage.src = item.link;
      popupImageCaption.textContent = item.name;
      popupPopupImage.alt = item.name;
      showPopup(popupImage);
 }

//Перебираем массив и говорим,что нужно сделать с каждыи item каждого объекта массива
      initialCards.forEach((item) => {
const cards = addCards(item)
      elementsList.append(cards);
});

//Удаление карточки
const elementGroupDelete = document.querySelector('.element__group-delete')
function handleDelete (evt){
const card = evt.target.closest('.element');
      card.remove();
};

//Константы для Попапа
const popupEditProfile = document.querySelector ('.popup_edit-profile');
const popupAddCards = document.querySelector ('.popup_add-cards');
const popupImage = document.querySelector ('.popup_image');
const closeButton = document.querySelectorAll ('.popup__closes');
const editButtonElement = document.querySelector ('.profile__edit-button');
const profileAddButton = document.querySelector ('.profile__add-button');
const nameElement = document.querySelector ('.profile__name');
const jobElement = document.querySelector ('.profile__about');
const formElement = document.querySelector ('.form');
const profileNameInput = document.getElementById ('form__profile-name');
const profileJobInput = document.getElementById ('form__profile-job');
const formNameInput = document.getElementById ('form__mesto-name');
const formSrcInput = document.getElementById ('form__mesto-src');
const popupPopupImage = document.querySelector ('.popup__popup-image');
const popupImageCaption = document.querySelector ('.popup__image-caption');

// Попап для профиля
function showPopup(popup) {
      popup.classList.add('popup_opened');
}

function closePopup(popup) {
      popup.classList.remove('popup_opened');
}
      editButtonElement.addEventListener('click', () => {
      profileNameInput.value = nameElement.textContent;
      profileJobInput.value = jobElement.textContent;
      showPopup(popupEditProfile);
});

// Нашел все формы
const documentForms = document.forms;

// Сабмит для профайла
const loginProfileForm = document.forms.profileForm;
      loginProfileForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      nameElement.textContent = profileNameInput.value;
      jobElement.textContent = profileJobInput.value;
      closePopup(popupEditProfile);
});

//  Сабмит для карточек + добавление карточки
const loginAddCardsForm = document.forms.addCardsForm;
      loginAddCardsForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
const newCard = {name: formNameInput.value, link: formSrcInput.value};
      elementsList.prepend(addCards(newCard));
      closePopup (popupAddCards);
      evt.target.reset();
});

      closeButton.forEach((element) => {
const popup = element.closest('.popup');
      element.addEventListener('click', function () {
      closePopup (popup);
      });
});

// Попап для добавления карточки
      profileAddButton.addEventListener('click', ()=> {
      showPopup (popupAddCards);
})

