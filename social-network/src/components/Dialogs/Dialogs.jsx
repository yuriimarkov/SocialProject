import React from "react";
import { Navigate } from "react-router-dom";
import styles from "./Dialogs.module.css";

import MessagesItem from "./MessagesItem/MessagesItem";
import DialogItem from "./DialogsItem/DialogItem";

const Dialogs = ({ state,addMessage, getPostChange, isAuth }) => {
  const handleAddMessage = () => {
    addMessage();
  }
  const getTextareaValues = (e) => {
    const text = e.target.value;
    getPostChange(text);
    }
    if (!isAuth)  return <Navigate to={'/login'} />
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
            <textarea  value={state.newMessageText} onChange={getTextareaValues} />
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
