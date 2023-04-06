// Объявляем переменные для валидации
const validationElement = {
  formSelector: document.forms,
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "form__submit-button_disabled", // неактивная кнопка
  inputErrorClass: "form__input_type_error", // поддчеркивание красным
  errorClass: "form__error_visible", //
};


const log = console.log;


//Живой ввод инпута (живая валидация)
function enableValidation(element) {
  const forms = Array.from(element.formSelector);
  forms.forEach((form) => {
    const inputList = form.querySelectorAll(element.inputSelector);
    const formButton = form.querySelector(element.submitButtonSelector);
    setEventListener(
      inputList,
      formButton,
      element.errorClass,
      element.inactiveButtonClass,
      element.inputErrorClass
    );
  });
}


function setEventListener(
  inputList,
  formButton,
  errorClass,
  inactiveButtonClass,
  inputErrorClass
) {
  inputList.forEach((input) => {
    input.addEventListener("input", () => {
      checkInputValidity(input, errorClass, inputErrorClass);
      activateButton(inputList, formButton, inactiveButtonClass);
    });
  });
}


function checkInputValidity(input, errorClass, inputErrorClass) {
  const currentInputError = document.querySelector(`#${input.id}-error`);
  if (input.validity.valid) {
    hideInputError(input, currentInputError, errorClass, inputErrorClass);
  } else {
    showInputError(input, currentInputError, errorClass, inputErrorClass);
  }
}


function hideInputError(input, currentInputError, errorClass, inputErrorClass) {
  input.classList.remove(inputErrorClass);
  currentInputError.textContent = "";
  currentInputError.classList.remove(errorClass);
}


function showInputError(input, currentInputError, errorClass, inputErrorClass) {
  input.classList.add(inputErrorClass);
  currentInputError.textContent = input.validationMessage;
  currentInputError.classList.add(errorClass);
}


function activateButton(inputList, formButton, inactiveButtonClass) {
  if (hasInvalidInput(inputList)) {
    disableButton(formButton, inactiveButtonClass);
  } else {
    enableButton(formButton, inactiveButtonClass);
  }
}


function hasInvalidInput(inputList) {
  return Array.from(inputList).some((input) => !input.validity.valid);
}


function enableButton(formButton, inactiveButtonClass) {
  formButton.classList.remove(inactiveButtonClass);
  formButton.removeAttribute("disabled", false);
}


function disableButton(formButton, inactiveButtonClass) {
  formButton.classList.add(inactiveButtonClass);
  formButton.setAttribute("disabled", true);
}


// Функция сброса валидации
function resetErrorForm(form) {
  form.querySelectorAll(validationElement.inputSelector).forEach((input) => {
    const currentInputError = document.querySelector(`#${input.id}-error`);
    if (!input.validity.valid) {
      hideInputError(
        input,
        currentInputError,
        validationElement.errorClass,
        validationElement.inputErrorClass
      );
    }
  });
}


enableValidation(validationElement);
