import styles from "./TodoListTab.module.css";
import { useState } from "react";

const TodoListTab = ({ currentTab, setCurrentTab }) => {
  // const [currentTab, setCurrentTab] = useState("All");
  const [todoCategory] = useState(["All", "To Be Done", "Done"]);

  const handleTab = (e) => {
    setCurrentTab(e.target.innerText);
  };
  return (
    <ul className={styles.tabList}>
      {todoCategory.map((category) => {
        return (
          <li key={category}>
            <button
              onClick={handleTab}
              className={currentTab === category ? `${styles.active}` : ""}
            >
              {category}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoListTab;
