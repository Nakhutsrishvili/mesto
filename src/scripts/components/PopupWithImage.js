import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector){
    super(popupSelector)
    this._popupPopupImage = this._popup.querySelector(".popup__popup-image");
    this._popupimageCaption = this._popup.querySelector(".popup__image-caption");
  }

  open = (item) => {
    this._popupPopupImage.src = item.link;
    this._popupPopupImage.textContent = item.title;
    this._popupPopupImage.alt = item.ntitle;
    super.open();
  }
}
