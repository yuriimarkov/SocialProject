const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: state.messagesData.length + 1,
        message: state.newMessageText,
      };
      return {
        ...state,
        newMessageText: "",
        messagesData: [...state.messagesData, newMessage],
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText,
      };
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});
export default dialogsReducer;
