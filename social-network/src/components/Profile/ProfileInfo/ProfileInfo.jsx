import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={styles.profile__info}>
      <div className={styles.info_cover}>
        <div className={styles.cover__logo}>
          <img src="https://www.tallahassee.com/gcdn/presto/2018/08/14/PTAL/6e4fff76-595d-4069-9112-cfe15dbfaa43-IMG_Stadium.jpeg?width=660&height=319&fit=crop&format=pjpg&auto=webp" />
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.info__avatar}>
          <img src="" alt="" />
        </div>
        <div className={styles.info__description}>
          <span className={styles.description__name}>UserName</span>
          <span className={styles.description__age}>UserAge</span>
          <span className={styles.description__city}>UserCity</span>
          <span className={styles.description__education}>UserEducation</span>
          <span className={styles.description__site}>UserWebsite</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
