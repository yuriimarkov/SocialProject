import React from "react";
import styles from "./Dialogs.module.css";

import MessagesItem from "./MessagesItem/MessagesItem";
import DialogItem from "./DialogsItem/DialogsItem";

const Dialogs = (props) => {
  const dialogsData = [
    { id: 1, name: "Oleg" },
    { id: 2, name: "Ivan" },
    { id: 3, name: "Stepan" },
    { id: 4, name: "Denis" },
  ];

  const messagesData = [
    {
      id: 1,
      message: "asdasdasda",
    },
    {
      id: 2,
      message: "asdasdasda",
    },
    {
      id: 3,
      message: "asdasdasda",
    },
    {
      id: 4,
      message: "asdasdasda",
    },
  ];

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>
        <ul className={styles.items__list}>
          {dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />)}
        </ul>
      </div>
      <div className={styles.dialogs__messages}>
        {messagesData.map(message => <MessagesItem key={message.id} message={message.message}/>)}
      </div>
    </div>
  );
};

export default Dialogs;
