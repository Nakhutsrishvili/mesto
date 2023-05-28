export default class Section {
  constructor (renderer, selectorContainer) {
    this._container = document.querySelector(selectorContainer);
    this._renderer = renderer;
  }

  addNewCards(dataCard) {
    dataCard.forEach(element =>{
      this._renderer(element)
    })
 }

  addItem(elementDom){
    this._container.prepend(elementDom);
  }
}
