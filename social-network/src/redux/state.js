import { rerenderEntireTree } from "./../render";

const state = {
    profilePage: {
      postData: [
        {id: 1, message: "Hi, how are you?", likesCount: 23,},
        {id: 2, message: "Hi, fine", likesCount: 3,},
        {id: 3, message: "asdasdasda", likesCount: 13,},
        {id: 4, message: "asdasdasda", likesCount: 43,},
      ],
    },
    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Oleg" },
        { id: 2, name: "Ivan" },
        { id: 3, name: "Stepan" },
        { id: 4, name: "Denis" },
      ],
      messagesData:  [
        {id: 1, message: "asdasdasda",},
        {id: 2, message: "asdasdasda",},
        {id: 3, message: "asdasdasda",},
        {id: 4, message: "asdasdasda",},
      ],
    }
}

export const addPost = (postMessage) =>{
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.postData.push(newPost);
  rerenderEntireTree(state);
}

export default state;