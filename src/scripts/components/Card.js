export default class Card {
  constructor(cardData, selectorTemplate, openImage, openDeletePopupCard, reverseLike){
    this._cardData = cardData;
    this._selectorTemplate = selectorTemplate;
    this._openImage = openImage;
    this._openDeletePopupCard = openDeletePopupCard;
    this._myId = cardData.myid;
    this._ownerId = cardData.owner._id;
    this._likes = cardData.likes;
    this._numberOfLikes = cardData.likes.length;
    this._reverseLike = reverseLike;
    this._cardId = cardData._id;
  }

_getTempalteClone(){
  return document.querySelector(this._selectorTemplate).content.querySelector('.element').cloneNode(true) //клонируем разметку
}

//обработчики
_buttonLike = () =>{
  this._reverseLike(this._elementLike, this._cardId)
  }

_buttonDelete = () => {
  this._openDeletePopupCard({element:this, cardId:this._cardId})
}

_buttonOpenImage = () => {
  this._openImage(this._cardData)
}

//вешаем слушателей
_setEventListeners(){
  this._elementLike.addEventListener('click', this._buttonLike);
  this._elementDelete.addEventListener('click', this._buttonDelete);
  this._elementImage.addEventListener ('click', this._buttonOpenImage);
}

_changeDeleteButton(){
this._myId === this._ownerId ? this._elementDelete.classList.add("element__group-delete") : this._elementDelete.classList.add("element__group-delete_inactive");
}

_chekPresenceLike(){
this._likes.forEach(element => {
  if(element._id === this._myId) {
  this._elementLike.classList.add("element__group-like_active");
  return 
  }
})
  this._counter.textContent = this._numberOfLikes
}

isLiked(likes) {
  this._elementLike.classList.toggle("element__group-like_active");
  this._counter.textContent = likes.length;
}

removeCard(){
  this._cloneElement.remove();
  this._cloneElement = null;
}

createCard(){
  this._cloneElement = this._getTempalteClone();
  this._elementImage = this._cloneElement.querySelector('.element__image');
  this._elementLike = this._cloneElement.querySelector('.element__group-like');
  this._elementDelete = this._cloneElement.querySelector('.element__group-delete');
  this._elementTitle = this._cloneElement.querySelector('.element__group-title');
  this._counter = this._cloneElement.querySelector('.element__counter');
  this._elementImage.src = this._cardData.link;
  this._elementImage.alt = this._cardData.name;
  this._elementTitle.textContent = this._cardData.name;
  this._chekPresenceLike();
  this._changeDeleteButton();
  this._setEventListeners();
  return this._cloneElement
  }
}
