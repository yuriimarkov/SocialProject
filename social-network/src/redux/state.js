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
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state changed");
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    debugger;
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
