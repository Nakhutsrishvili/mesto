export default class UserInfo {
  constructor(configInfo){
    this._nameElement = document.querySelector(configInfo.profileNameElementSelector);
    this._jobElement = document.querySelector(configInfo.profileJobElementSelector);
  }

  getUserInfo(){
    return{profileFormInputName:this._nameElement.textContent, profileFormInputJob:this._jobElement.textContent}
  }

  setUserInfo(userData){
    this._nameElement.textContent = userData.profileFormInputName;
    this._jobElement.textContent = userData.profileFormInputJob;
  }
}
