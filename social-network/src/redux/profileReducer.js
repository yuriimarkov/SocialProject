const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
  postData: [
    { id: 1, message: "Hi, how are you?", likesCount: 23 },
    { id: 2, message: "Hi, fine", likesCount: 3 },
    { id: 3, message: "asdasdasda", likesCount: 13 },
    { id: 4, message: "asdasdasda", likesCount: 43 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.postData.length + 1,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        newPostText: "",
        postData: [...state.postData, newPost],
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    default:
      return state;
  }
};
export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
