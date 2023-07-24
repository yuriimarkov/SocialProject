import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <img
            src="https://cdn.icon-icons.com/icons2/877/PNG/512/msn-social-logo_icon-icons.com_68382.png"
            alt="pictures"
          ></img>
        </div>
        <div className={styles.login}>
          {props.isAuth ? (
            <div className={styles.profile}>
              <span>{props.login}</span>
            </div>
          ) : (
            <NavLink to={"/login"}>Login</NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
