import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";

import Dialogs from "./Dialogs";

const DialogsContainer = ({ store }) => {
  const state = store.getState().dialogsPage;
  const addMessage = () => {
    store.dispatch(addMessageActionCreator());
  };

  const getPostChange = (text) => {
    store.dispatch(updateNewMessageTextActionCreator(text));
  };
  return (
    <Dialogs
      state={state}
      newMessageText={state.newMessageText}
      addMessage={addMessage}
      getPostChange={getPostChange}
    />
  );
};

export default DialogsContainer;
