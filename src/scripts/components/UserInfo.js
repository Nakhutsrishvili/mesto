export default class UserInfo {
  constructor(configInfo){
    this._nameElement = document.querySelector(configInfo.profileNameElementSelector);
    this._jobElement = document.querySelector(configInfo.profileJobElementSelector);
    this._avatarElement = document.querySelector(configInfo.profileAvatarElementSelector);
  }

  getUserInfo(){
    return{username:this._nameElement.textContent, about:this._jobElement.textContent}
  }

  setUserInfo({ avatar, username, about }){
    this._avatarElement.src = avatar;
    this._nameElement.textContent = username;
    this._jobElement.textContent = about;
  }

  setUserId (id) {
    this._id = id;
  }

  getUserId (){
    return this._id;
  }
}
