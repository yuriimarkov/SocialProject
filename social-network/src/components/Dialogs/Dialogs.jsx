import React from "react";
import styles from "./Dialogs.module.css";

import MessagesItem from "./MessagesItem/MessagesItem";
import DialogItem from "./DialogsItem/DialogItem";

const Dialogs = ({state}) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>
        <ul className={styles.items__list}>
          {state.dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />)}
        </ul>
      </div>
      <div className={styles.dialogs__messages}>
        {state.messagesData.map(message => <MessagesItem key={message.id} message={message.message}/>)}
      </div>
    </div>
  );
};

export default Dialogs;
