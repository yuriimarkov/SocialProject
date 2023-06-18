import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <img src="https://cdn.icon-icons.com/icons2/877/PNG/512/msn-social-logo_icon-icons.com_68382.png"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
