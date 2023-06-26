import { NavLink} from "react-router-dom";

import styles from "./NavBar.module.css";



const NavBar = () => {
  const setActive = ({isActive}) => isActive ? styles.active : styles.item__link;

  return <nav className={styles.nav}>
    <ul className={styles.nav__list}>
      <li className={styles.list__item}>
        <NavLink to="/profile" className={setActive}>Profile</NavLink>
      </li>
      <li className={styles.list__item}>
        <NavLink to="/dialogs" className={setActive}>Messages</NavLink>
      </li>
      <li className={styles.list__item}>
        <NavLink to="/news" className={setActive}>News</NavLink>
      </li>
      <li className={styles.list__item}>
        <NavLink to='/music' className={setActive}>Music</NavLink>
      </li>
      <li className={styles.list__item}>
        <NavLink to='/users' className={setActive}>Users</NavLink>
      </li>
      <li className={styles.list__item}>
        <NavLink to="/settings" className={setActive}>Settings</NavLink>
      </li>
    </ul>
  </nav>;
};

export default NavBar;
