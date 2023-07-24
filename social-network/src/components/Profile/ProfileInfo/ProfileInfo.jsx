import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus/ProfileStatus'
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={styles.profile__info}>
      <div className={styles.info}>
        <div className={styles.info__avatar}>
          <img src={props.profile.photos.small} alt={props.profile.fullName} />
        </div>
        <div className={styles.info__description}>
          <span className={styles.description__name}>
          <b> FullName :</b>  {props.profile.fullName}
          </span>
          <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
          <span className={styles.description__age}>
            <b>Age:</b> {props.profile.age ? props.profile.age : Math.floor(Math.random())}
          </span>
          <span className={styles.description__education}><b>Education:</b> {props.profile.lookingForAJobDescription}</span>
          <span className={styles.description__site}><b>WebSite:</b> {props.profile.contacts.github}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
