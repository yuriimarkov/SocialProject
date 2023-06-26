import ProfileInfo from './ProfileInfo/ProfileInfo'
import styles from "./Profile.module.css";
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer/>
    </div>
  );
};

export default Profile;
