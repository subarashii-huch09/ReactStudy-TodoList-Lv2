import styles from "./TodoItem.module.css";

const TodoItem = ({ item }) => {
  return (
    <li>
      <label className={styles.todoListLabel}>
        <input className={styles.todoListInput} type="checkbox" value="true" />
        <span>{item.description}</span>
      </label>
      <button>X</button>
    </li>
  );
};

export default TodoItem;
