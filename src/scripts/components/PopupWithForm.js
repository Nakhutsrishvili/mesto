import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup{
  constructor(popupSelector, submitFunction){
    super(popupSelector);
    this._submitFunction = submitFunction;
    this._popupForm = this._popup.querySelector(".form");
    this._popupInputList = this._popupForm.querySelectorAll(".form__input");
    this._submitButtons = this._popupForm.querySelector(".form__submit-button")
    this._initialButtonState = this._submitButtons.textContent;
  }

_getInputValues(){
  this._inputValues = {};
  this._popupInputList.forEach(input => {
  this._inputValues[input.name] = input.value;
  });
  return this._inputValues

}

setInputValues(userData){
  this._popupInputList.forEach(input =>{
    input.value = userData[input.name];
  })
}

setEventListeners(){
  super.setEventListeners();
  this._popupForm.addEventListener("submit", evt => {
    evt.preventDefault();
    this._submitButtons.textContent = `Сохранение...`
    this._submitFunction(this._getInputValues());
});
}

resetButtonText(){
  this._submitButtons.textContent = this._initialButtonState;
}

  close(){
    super.close();
    this._popupForm.reset();
  }
}