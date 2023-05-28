const editButtonElement = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const updateAvatarButton = document.querySelector(".profile__avatar-edit-button");
const selectorTemplate = "#element";
const popupProfileSelector =".popup_edit-profile";
const popupAddCardsSelector = ".popup_add-cards";
const popupDeleteCardSelector = ".popup_delete-card-confirm"
const popupImageSelector = ".popup_image";
const popupUpdateAvatarSelector = ".popup_avatar-update";
const elementLists = ".elements";
const configInfo = {
  profileNameElementSelector: ".profile__name",
  profileJobElementSelector: ".profile__about",
  profileAvatarElementSelector:".profile__avatar"
}
const validationElement = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "form__submit-button_disabled", // неактивная кнопка
  inputErrorClass: "form__input_type_error", // поддчеркивание красным
  errorClass: "form__error_visible", //
};

export{
  editButtonElement,
  profileAddButton,
  updateAvatarButton,
  selectorTemplate,
  popupProfileSelector,
  popupAddCardsSelector,
  popupImageSelector,
  popupDeleteCardSelector,
  popupUpdateAvatarSelector,
  elementLists,
  configInfo,
  validationElement
}

