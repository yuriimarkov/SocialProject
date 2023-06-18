import styles from "./MessagesItem.module.css";

const MessagesItem = ({ message }) => {
  return <div className={styles.messages__item}>{message}</div>;
};

export default MessagesItem;
