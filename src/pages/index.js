import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import {
  initialCards,editButtonElement,
  profileAddButton,selectorTemplate,
  popupProfileSelector,
  popupAddCardsSelector,
  popupImageSelector,
  elementLists,configInfo,
  validationElement
} from "../scripts/utils/constants.js";
import closeIcon from '../images/CloseIcon.png';

import '../pages/index.css';

const loginProfileForm = document.forms.profileForm;
const loginAddCardsForm = document.forms.addCardsForm;

const userInfo = new UserInfo (configInfo);
const popupImage = new PopupWithImage(popupImageSelector);

const section = new Section ({
  items:initialCards,
  renderer: (element) => {
  const cards = new Card (element, selectorTemplate, popupImage.open);
  return cards.createCard();
}
}, elementLists);

section.addNewCards();

const popupProfile = new PopupWithForm (popupProfileSelector, data =>{
userInfo.setUserInfo(data);
});

const popupAddCard = new PopupWithForm(popupAddCardsSelector, data =>{
  section.addItem(section.renderer(data));
});

const formProfileValidator = new FormValidator(validationElement, loginProfileForm);
formProfileValidator.enableValidation()

const formAddCardsValidator = new FormValidator(validationElement, loginAddCardsForm);
formAddCardsValidator.enableValidation()

popupProfile.setEventListeners();

popupAddCard.setEventListeners();

popupImage.setEventListeners();

editButtonElement.addEventListener("click", () => {
  formProfileValidator.resetValidationState();
  popupProfile.setInputValues(userInfo.getUserInfo())
  popupProfile.open()
});

profileAddButton.addEventListener("click", () => {
  formAddCardsValidator.resetValidationState();
  popupAddCard.open();
});


