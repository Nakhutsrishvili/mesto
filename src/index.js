import Card from "./scripts/components/Card.js";
import FormValidator from "./scripts/components/FormValidator.js";
import PopupWithImage from "./scripts/components/PopupWithImage.js";
import Section from "./scripts/components/Section.js";
import UserInfo from "./scripts/components/UserInfo.js";
import PopupWithForm from "./scripts/components/PopupWithForm.js";
import {initialCards,editButtonElement,profileAddButton,selectorTemplate,popupProfileSelector,popupAddCardsSelector,popupImageSelector,elementLists,configInfo,validationElement} from "./scripts/utils/constants.js";
import './pages/index.css';

const popupAddCards = document.querySelector(".popup_add-cards");

const loginProfileForm = document.forms.profileForm;
const loginAddCardsForm = document.forms.addCardsForm;

const userInfo = new UserInfo (configInfo);
const popupImage = new PopupWithImage(popupImageSelector);

const section = new Section ({
  items:initialCards,
  renderer: (element) => {
  const cards = new Card (element, selectorTemplate, popupImage.open);
  return cards.addCards();
}
}, elementLists);

section.addNewCards();

const popupProfile = new PopupWithForm (popupProfileSelector, (evt) =>{
  evt.preventDefault();
  userInfo.setUserInfo(popupProfile.getInputValues());
  popupProfile.close();
} )

const popupAddCard = new PopupWithForm(popupAddCardsSelector, (evt) =>{
  evt.preventDefault();
  section.addItem(section.renderer(popupAddCard.getInputValues()));
  popupAddCard.close();
})

const formProfileValidator = new FormValidator(validationElement, loginProfileForm);
formProfileValidator.enableValidation()

const formAddCardsValidator = new FormValidator(validationElement, loginAddCardsForm);
formAddCardsValidator.enableValidation()

popupProfile.setEventListeners();

popupAddCard.setEventListeners();

popupImage.setEventListeners();

editButtonElement.addEventListener("click", () => {
  formProfileValidator.resetErrorForm();
  popupProfile.setInputValues(userInfo.getUserInfo())
  popupProfile.open()
});

profileAddButton.addEventListener("click", () => {
  loginAddCardsForm.reset();
  formAddCardsValidator.resetErrorForm();
  popupAddCard.open();
});

popupAddCards.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(popupAddCards);
  }
});
