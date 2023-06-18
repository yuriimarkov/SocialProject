import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  const postData = [
    {
      id: 1,
      message: "Hi, how are you?",
      likesCount: 23,
    },
    {
      id: 2,
      message: "Hi, fine",
      likesCount: 3,
    },
    {
      id: 3,
      message: "asdasdasda",
      likesCount: 13,
    },
    {
      id: 4,
      message: "asdasdasda",
      likesCount: 43,
    },
  ];

  return (
    <div className={styles.posts}>
      <h2 className={styles.posts__heading}>My posts</h2>
      <div className={styles.posts__input}>
        <textarea name="" id="" className={styles.input__textarea}></textarea>
        <button className={styles.input__button}>Add post</button>
      </div>
      {postData.map( post =><Post key={post.id} message={post.message} likesCount={post.likesCount}/>)}
    </div>
  );
};

export default MyPosts;
