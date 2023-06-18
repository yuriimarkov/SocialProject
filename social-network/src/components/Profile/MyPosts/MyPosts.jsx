import React from "react";

import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ postData, addPost}) => {
  const post = postData.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));
  
  const newPostElement = React.createRef();

  const handleAddPost = () => {
    const text = newPostElement.current.value;
    addPost(text);
    newPostElement.current.value = '';
  }

  return (
    <div className={styles.posts}>
      <h2 className={styles.posts__heading}>My posts</h2>
      <div className={styles.posts__content}>
        <div className={styles.content__area}>
          <textarea ref={newPostElement} name="" id=""></textarea>
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
