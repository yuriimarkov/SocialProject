import React from "react";
import styles from "./Dialogs.module.css";

import MessagesItem from "./MessagesItem/MessagesItem";
import DialogItem from "./DialogsItem/DialogItem";

const Dialogs = ({ state }) => {
  const newMessageElement = React.useRef();
  const addMessage = () => {
    const text = newMessageElement.current.value;
    alert(text);
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
            <textarea ref={newMessageElement} name="" id=""></textarea>
          </div>
          <div className={styles.content__button}>
            <button onClick={addMessage}>Add message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
