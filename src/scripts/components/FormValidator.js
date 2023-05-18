export default class FormValidator {
  constructor(element, form){
    this._inputSelector = element.inputSelector;
    this._submitButtonSelector = element.submitButtonSelector;
    this._inactiveButtonClass = element.inactiveButtonClass;
    this._inputErrorClass = element.inputErrorClass;
    this._errorClass = element.errorClass;
    this._formButton = form.querySelector(this._submitButtonSelector);
    this._inputList = form.querySelectorAll(this._inputSelector);
    this._form = form;
}

_showInputError(input, currentInputError){
  input.classList.add(this._inputErrorClass);
  currentInputError.textContent = input.validationMessage;
  currentInputError.classList.add(this._errorClass);
}

_hideInputError(input, currentInputError){
  input.classList.remove(this._inputErrorClass);
  currentInputError.textContent = "";
  currentInputError.classList.remove(this._errorClass);
}

_checkInputValidity(input){
  const currentInputError = this._form.querySelector(`#${input.id}-error`);
    if (input.validity.valid) {
      this._hideInputError(input, currentInputError);
    } else {
      this._showInputError(input, currentInputError);
    }
}

_hasInvalidInput(){
  return Array.from(this._inputList).some((input) => !input.validity.valid);
}

_disableButton(){
  this._formButton.classList.add(this._inactiveButtonClass);
  this._formButton.setAttribute("disabled", true);
 }

_enableButton(){
  this._formButton.classList.remove(this._inactiveButtonClass);
  this._formButton.removeAttribute("disabled", false);
}

_activateButton(){
  if (this._hasInvalidInput(this._inputList)) {
   this._disableButton(this._formButton);
    } else {
      this._enableButton();
    }
 }

_setEventListener(){
  this._inputList.forEach(input => {
    input.addEventListener('input', () => {
      this._checkInputValidity(input,);
      this._activateButton();
    })
  })
}

enableValidation(){
   this._setEventListener();
}

resetErrorForm(){
   this._inputList.forEach(input => {
      const currentInputError = this._form.querySelector(`#${input.id}-error`);
      if (!input.validity.valid) {
        this._hideInputError(input, currentInputError);
      }
    })

  this._disableButton()
  }
}
