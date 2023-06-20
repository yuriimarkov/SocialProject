const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hi, how are you?", likesCount: 23 },
        { id: 2, message: "Hi, fine", likesCount: 3 },
        { id: 3, message: "asdasdasda", likesCount: 13 },
        { id: 4, message: "asdasdasda", likesCount: 43 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Oleg" },
        { id: 2, name: "Ivan" },
        { id: 3, name: "Stepan" },
        { id: 4, name: "Denis" },
      ],
      messagesData: [
        { id: 1, message: "asdasdasda" },
        { id: 2, message: "asdasdasda" },
        { id: 3, message: "asdasdasda" },
        { id: 4, message: "asdasdasda" },
      ],
      newMessageText: "",
    },
  },
  _callSubscriber() {
    console.log("state changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _addPost() {
    let newPost = {
      id: this._state.profilePage.postData.length + 1,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  _addMessage() {
    let newMessage = {
      id: this._state.dialogsPage.messagesData.length + 1,
      message: this._state.dialogsPage.newMessageText,
    }
    this._state.dialogsPage.messagesData.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this._state);
  },
  _updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      this._addPost();
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._updateNewPostText(action.newText);
    } else if (action.type === ADD_MESSAGE) {
      this._addMessage();
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._updateNewMessageText(action.newText);
    }
  },
};

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

window.store = store

export default store;
