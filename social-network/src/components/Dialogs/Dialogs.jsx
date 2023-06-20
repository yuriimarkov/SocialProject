import React from "react";
import styles from "./Dialogs.module.css";

import MessagesItem from "./MessagesItem/MessagesItem";
import DialogItem from "./DialogsItem/DialogItem";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/state";

const Dialogs = ({ state, dispatch, newPostText }) => {
  const newMessageElement = React.useRef();

  const handleAddMessage = () => {
    dispatch(addMessageActionCreator());
  }
  
  const onMessageChange = () => {
    const text = newMessageElement.current.value;
    dispatch(updateNewMessageTextActionCreator(text));
  };
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>
        <ul className={styles.items__list}>
          {state.dialogsData.map((dialog) => (
            <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
          ))}
        </ul>
      </div>
      <div className={styles.dialogs__messages}>
        {state.messagesData.map((message) => (
          <MessagesItem key={message.id} message={message.message} />
        ))}
        <div className={styles.messages__content}>
          <div className={styles.content__area}>
            <textarea ref={newMessageElement} value={newPostText} onChange={onMessageChange} />
          </div>
          <div className={styles.content__button}>
            <button onClick={handleAddMessage}>Add message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
