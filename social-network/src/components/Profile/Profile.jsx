import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";

const Profile = ({state, addPost, updateNewPostText}) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postData={state.postData} newPostText={state.newPostText} updateNewPostText={updateNewPostText} addPost={addPost} />
    </div>
  );
};

export default Profile;
