import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";

const Profile = ({state}) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postData={state.postData} />
    </div>
  );
};

export default Profile;
