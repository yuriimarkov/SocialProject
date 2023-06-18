import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.posts__item}>
      <div className={styles.item__img}>
        <img src="" alt="" />
      </div>
      <span className={styles.item__text}>{props.message}</span>
      <span className={styles.item__like}>{props.likesCount}</span>
    </div>
  );
};

export default Post;
