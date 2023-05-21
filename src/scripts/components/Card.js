export default class Card {
  constructor(item, selectorTemplate, openImage){
    this._item = item;
    this._selectorTemplate = selectorTemplate;
    this._openImage = openImage;
  }

_getTempalteClone(){
  return document.querySelector(this._selectorTemplate).content.querySelector('.element').cloneNode(true) //клонируем разметку
}

//обработчики
_buttonLike = () =>{
   this._elementLike.classList.toggle("element__group-like_active");
  }

_buttonDelete = () => {
  this._cloneElement.remove();
  this._cloneElement = null; // зануляем, чтобы не хранилась в памяти карточка, которая удалена
}

_buttonOpenImage = () => {
  this._openImage(this._item)
}

//вешаем слушателей
_setEventListeners(){
  this._elementLike.addEventListener('click', this._buttonLike);
  this._elementDelete.addEventListener('click', this._buttonDelete);
  this._elementImage.addEventListener ('click', this._buttonOpenImage);
}

createCard(){
  this._cloneElement = this._getTempalteClone();
  this._elementImage = this._cloneElement.querySelector('.element__image');
  this._elementLike = this._cloneElement.querySelector('.element__group-like');
  this._elementDelete = this._cloneElement.querySelector('.element__group-delete');
  this._elementTitle = this._cloneElement.querySelector('.element__group-title');
  this._elementImage.src = this._item.link;
  this._elementImage.alt = this._item.title;
  this._elementTitle.textContent = this._item.title;
  this._setEventListeners()
  return this._cloneElement
  }
}
