import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup{
  constructor(popupSelector, submitFunction){
    super(popupSelector);
    this._submitFunction = submitFunction;
    this._popupForm = this._popup.querySelector(".form");
    this._popupInputList = this._popupForm.querySelectorAll(".form__input")
    }

getInputValues(){
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
  this._popupForm.addEventListener("submit", this._submitFunction);
}

  close(){
    super.close();
    this._popupForm.reset();
  }
}
