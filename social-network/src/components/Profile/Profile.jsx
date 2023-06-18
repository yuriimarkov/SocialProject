import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";

const Profile = ({state, addPost}) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postData={state.postData} addPost={addPost} />
    </div>
  );
};

export default Profile;
