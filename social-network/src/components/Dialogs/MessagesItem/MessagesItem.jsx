import styles from "./MessagesItem.module.css";

const MessagesItem = ({ message }) => {

  return (
    <div className={styles.messages__item}>
      <div className={styles.item__text}>{message}</div>
    </div>
  );
};

export default MessagesItem;
