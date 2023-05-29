import Popup from "./Popup";

export default class PopupDeleteConfirm extends Popup{
    constructor(popupSelector, submitFunction){
        super(popupSelector);
        this._submitFunction = submitFunction;
        this._popupForm = this._popup.querySelector(".form");
        this._submitButtons = this._popupForm.querySelector(".form__submit-button")
        this._initialButtonState = this._submitButtons.textContent;
    }

    setEventListeners(){
        super.setEventListeners();
        this._popupForm.addEventListener("submit", evt => {
        evt.preventDefault();
        this._submitButtons.textContent = `Удаление...`
        this._submitFunction({element:this._element, cardId:this._cardId});
        })
    }

    resetButtonText(){
        this._submitButtons.textContent = this._initialButtonState;
      }

    open = ({element, cardId}) => {
        super.open();
        this._element = element;
        this._cardId = cardId;
    }
    }
