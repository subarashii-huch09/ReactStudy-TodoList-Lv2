import styles from "./Header.module.css";
import logo from"../img/logo_lg.png"
const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.headerTitle}>
        <img src={logo} alt="logo" />
      </h1>
      <ul className={styles.navList}>
        <li className={styles.listItem}>
          <button className={styles.user}>王小明的代辦</button>
        </li>
        <li className={styles.listItem}>
          <button className={styles.logOutButton}>登出</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
