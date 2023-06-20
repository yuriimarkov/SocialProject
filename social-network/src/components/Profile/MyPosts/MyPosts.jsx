import React from "react";

import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ postData, newPostText, dispatch}) => {
  const post = postData.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));
  
  const newPostElement = React.createRef();

  const handleAddPost = () => {
    dispatch({type: "ADD-POST"});
  }

  const onPostChange = () => {
    const text = newPostElement.current.value;
    dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
  }

  return (
    <div className={styles.posts}>
      <h2 className={styles.posts__heading}>My posts</h2>
      <div className={styles.posts__content}>
        <div className={styles.content__area}>
          <textarea ref={newPostElement} value={newPostText} onChange={onPostChange}/>
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
