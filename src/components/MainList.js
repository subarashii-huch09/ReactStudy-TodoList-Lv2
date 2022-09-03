import styles from "./MainList.module.css";
const MainList = ({ children }) => {
  return <div className={styles.todoListContainer}>{children}</div>;
};

export default MainList;
