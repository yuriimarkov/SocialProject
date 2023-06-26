import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = ({ state, addPost, getPostChange}) => {
  const post = state.postData.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));
  

  const handleAddPost = () => {
    addPost();
  }

  const getTextareaValues = (e) => {
    const text = e.target.value;
    getPostChange(text);
  }

  return (
    <div className={styles.posts}>
      <h2 className={styles.posts__heading}>My posts</h2>
      <div className={styles.posts__content}>
        <div className={styles.content__area}>
          <textarea  value={state.newPostText} onChange={getTextareaValues}/>
        </div>
        <div className={styles.content__button}>
          <button className={styles.button} onClick={handleAddPost}>
            Add post
          </button>
        </div>
      </div>
      {post}
    </div>
  );
};

export default MyPosts;
