import Popup from "./Popup";

export default class PopupDeleteConfirm extends Popup{
    constructor(popupSelector, submitFunction){
        super(popupSelector);
        this._submitFunction = submitFunction;
    }

    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener("submit", evt => {
        evt.preventDefault();
        this._submitFunction(this._element);
        this.close();    
        })
    }

    open = (element) => {
        super.open();
        this._element = element;
    }
    }
