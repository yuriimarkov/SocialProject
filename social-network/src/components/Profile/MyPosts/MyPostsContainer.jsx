import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = ({ store }) => {
  debugger;
  const state = store.getState().profilePage;
  const addPost = () => {
    store.dispatch(addPostActionCreator());
  };

  const getPostChange = (text) => {
    store.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <MyPosts
      addPost={addPost}
      getPostChange={getPostChange}
      newPostText={state.newPostText}
      postData={state.postData}
    />
  );
};

export default MyPostsContainer;
