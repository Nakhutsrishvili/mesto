/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/constants.js */ \"./src/scripts/constants.js\");\n/* harmony import */ var _scripts_Card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/Card.js */ \"./src/scripts/Card.js\");\n/* harmony import */ var _scripts_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/FormValidator.js */ \"./src/scripts/FormValidator.js\");\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/index.css */ \"./src/pages/index.css\");\n\n\n\n\n\n// Константы общие\nvar selectorTemplate = \"#element\";\nvar elementsList = document.querySelector(\".elements\");\nvar popupEditProfile = document.querySelector(\".popup_edit-profile\");\nvar popupAddCards = document.querySelector(\".popup_add-cards\");\nvar popupImage = document.querySelector(\".popup_image\");\nvar closeButtons = document.querySelectorAll(\".popup__close\");\nvar editButtonElement = document.querySelector(\".profile__edit-button\");\nvar profileAddButton = document.querySelector(\".profile__add-button\");\nvar nameElement = document.querySelector(\".profile__name\");\nvar jobElement = document.querySelector(\".profile__about\");\nvar profileNameInput = document.getElementById(\"name\");\nvar profileJobInput = document.getElementById(\"job\");\nvar formNameInput = document.getElementById(\"title\");\nvar formSrcInput = document.getElementById(\"src\");\nvar popupPopupImage = document.querySelector(\".popup__popup-image\");\nvar popupImageCaption = document.querySelector(\".popup__image-caption\");\n\n// Константы для Submit\nvar loginProfileForm = document.forms.profileForm;\nvar loginAddCardsForm = document.forms.addCardsForm;\n\n// Константы для валидации\nvar validationElement = {\n  inputSelector: \".form__input\",\n  submitButtonSelector: \".form__submit-button\",\n  inactiveButtonClass: \"form__submit-button_disabled\",\n  // неактивная кнопка\n  inputErrorClass: \"form__input_type_error\",\n  // поддчеркивание красным\n  errorClass: \"form__error_visible\" //\n};\n\n// Добавляем карточку (клонируем и привязываем ссылки и текст)\nfunction addNewCards(item) {\n  var cards = new _scripts_Card_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](item, selectorTemplate, openImage);\n  var elementCard = cards.addCards();\n  return elementCard;\n}\n\n//Функция открытия картинки\nfunction openImage(item) {\n  popupPopupImage.src = item.link;\n  popupImageCaption.textContent = item.name;\n  popupPopupImage.alt = item.name;\n  showPopup(popupImage);\n}\n\n//Перебираем массив и говорим,что нужно сделать с каждыи item каждого объекта массива\n_scripts_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach(function (item) {\n  elementsList.append(addNewCards(item));\n});\n\n//Удаление карточки\nvar elementGroupDelete = document.querySelector(\".element__group-delete\");\nfunction handleDelete(evt) {\n  var card = evt.target.closest(\".element\");\n  card.remove();\n}\n\n//создаем экземпляр для формы профайла + запуск валидации формы\nvar formProfileValidator = new _scripts_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](validationElement, loginProfileForm);\nconsole.log(formProfileValidator);\nformProfileValidator.enableValidation();\n\n//создаем экземпляр для формы добавления карточки + запуск валидации формы\nvar formAddCardsValidator = new _scripts_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](validationElement, loginAddCardsForm);\nconsole.log(formAddCardsValidator);\nformAddCardsValidator.enableValidation();\n\n// Попап для профиля\nfunction showPopup(popup) {\n  popup.classList.add(\"popup_opened\");\n  document.addEventListener(\"keydown\", closePopupEsc);\n}\nfunction closePopup(popup) {\n  popup.classList.remove(\"popup_opened\");\n  document.removeEventListener(\"keydown\", closePopupEsc);\n}\neditButtonElement.addEventListener(\"click\", function () {\n  formProfileValidator.resetErrorForm(); // при невалидных инпутах сбрасываем ошибки при закрытии попапа*/\n  profileNameInput.value = nameElement.textContent;\n  profileJobInput.value = jobElement.textContent;\n  showPopup(popupEditProfile);\n});\n\n// Сабмит для профайла\nloginProfileForm.addEventListener(\"submit\", function (evt) {\n  evt.preventDefault();\n  nameElement.textContent = profileNameInput.value;\n  jobElement.textContent = profileJobInput.value;\n  closePopup(popupEditProfile);\n});\n\n//  Сабмит для карточек + добавление карточки\nloginAddCardsForm.addEventListener(\"submit\", function (evt) {\n  evt.preventDefault();\n  var newCard = {\n    name: formNameInput.value,\n    link: formSrcInput.value\n  };\n  elementsList.prepend(addNewCards(newCard));\n  closePopup(popupAddCards);\n  evt.target.reset();\n});\n\n// Закртытие попапа\ncloseButtons.forEach(function (element) {\n  var popup = element.closest(\".popup\");\n  element.addEventListener(\"click\", function () {\n    closePopup(popup);\n  });\n});\n\n// Попап для добавления карточки\nprofileAddButton.addEventListener(\"click\", function () {\n  loginAddCardsForm.reset();\n  formAddCardsValidator.resetErrorForm(); //при невалидных инпутах сбрасываем ошибки\n  showPopup(popupAddCards);\n});\n\n// Универсальная кнопка закрытия попапа при нажатии на Escape\nfunction closePopupEsc(evt) {\n  if (evt.key === \"Escape\") {\n    var popupOpened = document.querySelector(\".popup_opened\");\n    closePopup(popupOpened);\n  }\n}\n\n// Закрытие по Overlay\npopupEditProfile.addEventListener(\"click\", function (evt) {\n  if (evt.currentTarget === evt.target) {\n    closePopup(popupEditProfile);\n  }\n});\npopupAddCards.addEventListener(\"click\", function (evt) {\n  if (evt.currentTarget === evt.target) {\n    closePopup(popupAddCards);\n  }\n});\npopupImage.addEventListener(\"click\", function (evt) {\n  if (evt.currentTarget === evt.target) {\n    closePopup(popupImage);\n  }\n});\n\n//# sourceURL=webpack://mesto/./src/index.js?");

/***/ }),

/***/ "./src/scripts/Card.js":
/*!*****************************!*\
  !*** ./src/scripts/Card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Card)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Card = /*#__PURE__*/function () {\n  function Card(item, selectorTemplate, openImage) {\n    var _this = this;\n    _classCallCheck(this, Card);\n    //обработчики\n    _defineProperty(this, \"_buttonLike\", function () {\n      _this._elementLike.classList.toggle(\"element__group-like_active\");\n    });\n    _defineProperty(this, \"_buttonDelete\", function () {\n      _this._cloneElement.remove();\n      _this._cloneElement = null; // зануляем, чтобы не хранилась в памяти карточка, которая удалена\n    });\n    _defineProperty(this, \"_buttonOpenImage\", function () {\n      _this._openImage(_this._item);\n    });\n    this._item = item;\n    this._link = item.link;\n    this._name = item.name;\n    this._selectorTemplate = selectorTemplate;\n    this._openImage = openImage;\n  }\n  _createClass(Card, [{\n    key: \"_getTempalteClone\",\n    value: function _getTempalteClone() {\n      return document.querySelector(this._selectorTemplate).content.querySelector('.element').cloneNode(true); //клонируем разметку\n    }\n  }, {\n    key: \"_setEventListener\",\n    value:\n    //вешаем слушателей\n    function _setEventListener() {\n      this._elementLike.addEventListener('click', this._buttonLike);\n      this._elementDelete.addEventListener('click', this._buttonDelete);\n      this._elementImage.addEventListener('click', this._buttonOpenImage);\n    }\n  }, {\n    key: \"addCards\",\n    value: function addCards() {\n      this._cloneElement = this._getTempalteClone();\n      this._elementImage = this._cloneElement.querySelector('.element__image');\n      this._elementLike = this._cloneElement.querySelector('.element__group-like');\n      this._elementDelete = this._cloneElement.querySelector('.element__group-delete');\n      this._elementTitle = this._cloneElement.querySelector('.element__group-title');\n      this._elementImage.src = this._link;\n      this._elementImage.alt = this._name;\n      this._elementTitle.textContent = this._name;\n      this._setEventListener();\n      return this._cloneElement;\n    }\n  }]);\n  return Card;\n}();\n\n\n//# sourceURL=webpack://mesto/./src/scripts/Card.js?");

/***/ }),

/***/ "./src/scripts/FormValidator.js":
/*!**************************************!*\
  !*** ./src/scripts/FormValidator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FormValidator)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar FormValidator = /*#__PURE__*/function () {\n  function FormValidator(element, form) {\n    _classCallCheck(this, FormValidator);\n    this._inputSelector = element.inputSelector;\n    this._submitButtonSelector = element.submitButtonSelector;\n    this._inactiveButtonClass = element.inactiveButtonClass;\n    this._inputErrorClass = element.inputErrorClass;\n    this._errorClass = element.errorClass;\n    this._formButton = form.querySelector(this._submitButtonSelector);\n    this._inputList = form.querySelectorAll(this._inputSelector);\n    this._form = form;\n  }\n  _createClass(FormValidator, [{\n    key: \"_showInputError\",\n    value: function _showInputError(input, currentInputError) {\n      input.classList.add(this._inputErrorClass);\n      currentInputError.textContent = input.validationMessage;\n      currentInputError.classList.add(this._errorClass);\n    }\n  }, {\n    key: \"_hideInputError\",\n    value: function _hideInputError(input, currentInputError) {\n      input.classList.remove(this._inputErrorClass);\n      currentInputError.textContent = \"\";\n      currentInputError.classList.remove(this._errorClass);\n    }\n  }, {\n    key: \"_checkInputValidity\",\n    value: function _checkInputValidity(input) {\n      var currentInputError = this._form.querySelector(\"#\".concat(input.id, \"-error\"));\n      if (input.validity.valid) {\n        this._hideInputError(input, currentInputError);\n      } else {\n        this._showInputError(input, currentInputError);\n      }\n    }\n  }, {\n    key: \"_hasInvalidInput\",\n    value: function _hasInvalidInput() {\n      return Array.from(this._inputList).some(function (input) {\n        return !input.validity.valid;\n      });\n    }\n  }, {\n    key: \"_disableButton\",\n    value: function _disableButton() {\n      this._formButton.classList.add(this._inactiveButtonClass);\n      this._formButton.setAttribute(\"disabled\", true);\n    }\n  }, {\n    key: \"_enableButton\",\n    value: function _enableButton() {\n      this._formButton.classList.remove(this._inactiveButtonClass);\n      this._formButton.removeAttribute(\"disabled\", false);\n    }\n  }, {\n    key: \"_activateButton\",\n    value: function _activateButton() {\n      if (this._hasInvalidInput(this._inputList)) {\n        this._disableButton(this._formButton);\n      } else {\n        this._enableButton();\n      }\n    }\n  }, {\n    key: \"_setEventListener\",\n    value: function _setEventListener() {\n      var _this = this;\n      this._inputList.forEach(function (input) {\n        input.addEventListener('input', function () {\n          _this._checkInputValidity(input);\n          _this._activateButton();\n        });\n      });\n    }\n  }, {\n    key: \"enableValidation\",\n    value: function enableValidation() {\n      this._setEventListener();\n    }\n  }, {\n    key: \"resetErrorForm\",\n    value: function resetErrorForm() {\n      var _this2 = this;\n      this._inputList.forEach(function (input) {\n        var currentInputError = _this2._form.querySelector(\"#\".concat(input.id, \"-error\"));\n        if (!input.validity.valid) {\n          _this2._hideInputError(input, currentInputError);\n        }\n      });\n      this._disableButton();\n    }\n  }]);\n  return FormValidator;\n}();\n\n\n//# sourceURL=webpack://mesto/./src/scripts/FormValidator.js?");

/***/ }),

/***/ "./src/scripts/constants.js":
/*!**********************************!*\
  !*** ./src/scripts/constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Загружаем массив с карточками, у которого внутри объекты с свойствами.\nvar initialCards = [{\n  name: \"Архыз\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg\"\n}, {\n  name: \"Челябинская область\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg\"\n}, {\n  name: \"Иваново\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg\"\n}, {\n  name: \"Камчатка\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg\"\n}, {\n  name: \"Холмогорский район\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg\"\n}, {\n  name: \"Байкал\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg\"\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialCards);\n\n//# sourceURL=webpack://mesto/./src/scripts/constants.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto/./src/pages/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;