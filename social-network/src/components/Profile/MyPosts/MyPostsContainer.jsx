import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    state: state.profilePage,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    getPostChange: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchtoProps)(MyPosts);

export default MyPostsContainer;
