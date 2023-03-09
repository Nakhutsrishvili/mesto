let nameElement = document.querySelector ('.profile__name');
let jobElement = document.querySelector ('.profile__about');
let editButtonElement = document.querySelector ('.profile__edit-button');
let popupElement = document.querySelector ('.popup');
let closeButtonElement = document.querySelector ('.popup__close');
let formElement = document.querySelector ('.form');
let nameInput = document.getElementById ('form__input-name');
let jobInput = document.getElementById ('form__input-job');

function showPopup() {
    popupElement.classList.add('popup_opened');
    nameInput.value = nameElement.textContent;
    jobInput.value = jobElement.textContent;
}

function closePopup() {
    popupElement.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    nameElement.textContent = nameInput.value;
    jobElement.textContent = jobInput.value;
    closePopup();
}

    editButtonElement.addEventListener('click', showPopup);
    closeButtonElement.addEventListener('click', closePopup);
    formElement.addEventListener('submit', handleFormSubmit);


