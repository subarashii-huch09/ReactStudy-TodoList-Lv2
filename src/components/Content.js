import TodoListTab from "./TodoListTab";
import styles from "./Content.module.css";
import Swal from "sweetalert2";
import { useState } from "react";
import emptyImage from "../img/empty-bg.png"

function Content({ todoData, setTodoData }) {
  const [currentTab, setCurrentTab] = useState("All");

  const removeItem = (item) => {
    
     setTodoData(todoData.filter((d)=> d.id !== item.id))
    //  Make sure to add argument - item
    //  <button onClick={() => removeItem(item)}>X</button>
  };

  const toggleDone = (item) => {
    setTodoData(
      todoData.map((d) => (d.id === item.id ? { ...d, done: !d.done } : d))
    );
  };

  // console.log(todoData)

  const removeDone = () => {
    Swal.fire({
      title: "確定要清除已完成項目?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "確認",
      cancelButtonText: "取消",
    }).then((result) => {
      if (result.isConfirmed) {
        setTodoData(todoData.filter((item) => item.done === false));
        Swal.fire("清除成功!", "", "success");
      }
    });
  };

  const EmptyItem = () => {
    return (
      <div className={styles.empty}>
        <p className={styles.emptyMessage}>目前尚無代辦事項</p>;
        <img src={emptyImage} alt="emptyImage"/>
      </div>
    );
  };

  return (
    <>
      <TodoListTab currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className={styles.todoListItems}>
        <ul className={styles.todoListItem}>
          {todoData.length > 0 ? (
            todoData
              .filter((item) => {
                if (currentTab === "To Be Done") {
                  return item.done === false;
                } else if (currentTab === "Done") {
                  return item.done === true;
                } else {
                  return true;
                }
              })
              .map((item) => {
                return (
                  <li key={item.id}>
                    <label className={styles.todoListLabel}>
                      <input
                        className={styles.todoListInput}
                        type="checkbox"
                        checked={item.done ? "checked" : ""}
                        onChange={() => toggleDone(item)}
                      />
                      <span>{item.description}</span>
                    </label>
                    <button onClick={() => removeItem(item)}>X</button>
                  </li>
                );
              })
          ) : (
            <EmptyItem />
          )}
        </ul>
        <div className={styles.todoListStatistics}>
          <p>
            {todoData.filter((item) => item.done === false).length}
            個待完成項目
          </p>
          <button onClick={removeDone}>清除已完成項目</button>
        </div>
      </div>
    </>
  );
}

export default Content;
