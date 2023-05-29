import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupDeleteConfirm from "../scripts/components/PopupDeleteConfirm.js";
import Api from "../scripts/components/Api.js";
import {
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

const deletePopupCard = new PopupDeleteConfirm(popupDeleteCardSelector, ({element, cardId}) =>{
    api.deleteCards(cardId)
    .then(() =>{
    element.removeCard()
    deletePopupCard.close()
  })
    .catch((error) => console.error(`Ошибка удаления карточки ${error}`))
    .finally(() => deletePopupCard.resetButtonText())
});

function createNewCard (element){
  const cards = new Card (element, selectorTemplate, popupImage.open, deletePopupCard.open, (elementLike, cardId) => {
    if(elementLike.classList.contains("element__group-like_active")){
      api.deleteLike(cardId)
      .then(res =>{
      cards.isLiked(res.likes)
  })
      .catch((error) => console.error(`Ошибка удаления лайка ${error}`))
      .finally()
    } else{
      api.addLike(cardId)
      .then(res =>{
      cards.isLiked(res.likes)
  })
      .catch((error) => console.error(`Ошибка постановки лайка ${error}`))
      .finally()
}
  });
  return cards.createCard();
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '63581f11-ea1f-433e-8abb-0e1eb8f6c5b5',
    'Content-Type': 'application/json'
  }})

const section = new Section ((element) => {
  section.addItem(createNewCard(element))
}, elementLists);

const popupProfile = new PopupWithForm (popupProfileSelector, data =>{
  api.setUserInfo(data)
  .then(res => {
    userInfo.setUserInfo({username: res.name, about: res.about, avatar: res.avatar});
    popupProfile.close();
  })
  .catch((error) => console.error(`Ошибка данных профиля ${error}`))
  .finally(() => popupProfile.resetButtonText())
  });

const popupAddCard = new PopupWithForm(popupAddCardsSelector, data =>{
    api.addCard(data)
    .then(dataCard => {
    dataCard.myid = userInfo.getUserId()
    section.addItem(createNewCard(dataCard))
    popupAddCard.close();
  })
    .catch((error) => console.error(`Ошибка создания карточки ${error}`))
    .finally(() => popupAddCard.resetButtonText())
});

const popupUpdateAvatar = new PopupWithForm(popupUpdateAvatarSelector, data =>{
    api.setUpdateAvatar(data)
    .then(res => {
      userInfo.setUserInfo({username: res.name, about: res.about, avatar: res.avatar})
      popupUpdateAvatar.close();
  })
    .catch((error) => console.error(`Ошибка обновления аватара ${error}`))
    .finally(() => popupUpdateAvatar.resetButtonText())
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

Promise.all([api.getInfo(), api.getCards()])
.then(([dataUser, dataCard]) =>{
  dataCard.forEach(element => element.myid = dataUser._id);
  userInfo.setUserInfo({ username: dataUser.name, about: dataUser.about, avatar: dataUser.avatar })
  userInfo.setUserId(dataUser._id)
  section.addNewCards(dataCard.reverse());
})
.catch((error) => console.error(`Ошибка при загрузке страницы ${error}`))