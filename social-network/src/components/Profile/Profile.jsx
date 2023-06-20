import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";

const Profile = ({state, dispatch}) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postData={state.postData} newPostText={state.newPostText} dispatch={dispatch}/>
    </div>
  );
};

export default Profile;
