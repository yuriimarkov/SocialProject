import React from "react";
import styles from "./DialogsItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = ({ name, id }) => {
  return (
    <li className={styles.list__item + " " + styles.active}>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </li>
  );
};

export default DialogItem;
