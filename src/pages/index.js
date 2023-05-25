import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupDeleteConfirm from "../scripts/components/PopupDeleteConfirm.js";
import {
  initialCards,
  editButtonElement,
  profileAddButton,
  updateAvatarButton,
  selectorTemplate,
  popupProfileSelector,
  popupAddCardsSelector,
  popupImageSelector,
  popupUpdateAvatarSelector,
  popupDeleteCardSelector,
  elementLists,
  configInfo,
  validationElement
} from "../scripts/utils/constants.js";
import closeIcon from '../images/CloseIcon.png';

import '../pages/index.css';

const loginProfileForm = document.forms.profileForm;
const loginAddCardsForm = document.forms.addCardsForm;
const loginUpdateAvatarForm = document.forms.updateAvatarForm;

const userInfo = new UserInfo (configInfo);
const popupImage = new PopupWithImage(popupImageSelector);
const deletePopupCard = new PopupDeleteConfirm(popupDeleteCardSelector, (element) =>{
element.removeCard();
});

function createNewCard (element){
  const cards = new Card (element, selectorTemplate, popupImage.open, deletePopupCard.open);
  return cards.createCard();
}

const section = new Section ({
  items:initialCards,
  renderer: (element) => {
  section.addItem(createNewCard(element))
}
}, elementLists);

section.addNewCards();

const popupProfile = new PopupWithForm (popupProfileSelector, data =>{
userInfo.setUserInfo(data);
});

const popupAddCard = new PopupWithForm(popupAddCardsSelector, data =>{
  section.addItem(section.renderer(data));
});

const popupUpdateAvatar = new PopupWithForm(popupUpdateAvatarSelector, data =>{
  document.querySelector(".profile__avatar").src = data.avatar;
});

const formProfileValidator = new FormValidator(validationElement, loginProfileForm);
formProfileValidator.enableValidation()

const formAddCardsValidator = new FormValidator(validationElement, loginAddCardsForm);
formAddCardsValidator.enableValidation()

const formUpdateAvatarValidator = new FormValidator(validationElement, loginUpdateAvatarForm);
formUpdateAvatarValidator.enableValidation()

popupProfile.setEventListeners();
popupAddCard.setEventListeners();
popupImage.setEventListeners();
popupUpdateAvatar.setEventListeners();
deletePopupCard.setEventListeners();

editButtonElement.addEventListener("click", () => {
  formProfileValidator.resetValidationState();
  popupProfile.setInputValues(userInfo.getUserInfo())
  popupProfile.open()
});

profileAddButton.addEventListener("click", () => {
  formAddCardsValidator.resetValidationState();
  popupAddCard.open();
});

updateAvatarButton.addEventListener("click", () => {
  formUpdateAvatarValidator.resetValidationState();
  popupUpdateAvatar.open();
});
