import TodoInput from "./TodoInput";
import Content from "./Content";
import { useState } from "react";
import { NavLink} from "react-router-dom";
import styles from "./TodoList.module.css"
import logo from "../img/logo_lg.png";
import authUser from "../authUser";

let data = [
  {
    id: Date.now() + Math.floor(Math.random() * 1000),
    description: "把冰箱發霉的檸檬拿去丟",
    done: true,
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000),
    description: "打電話叫媽媽匯款給我",
    done: false,
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000),
    description: "整理電腦資料夾",
    done: false,
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000),
    description: "繳電費水費瓦斯費",
    done: false,
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000),
    description: "約vicky禮拜三泡溫泉",
    done: false,
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000),
    description: "約ada禮拜四吃晚餐",
    done: false,
  },
];

const Logout = () => {
  authUser.clearUserData();
};


const TodoList = () =>{
  const [input, setInput] = useState("");
  const [todoData, setTodoData] = useState(data);

  const { nickname } = authUser.getUserData();
  console.log(nickname)
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerTitle}>
          <img src={logo} alt="logo" />
        </h1>
        <ul className={styles.navList}>
          <li className={styles.listItem}>
            <button className={styles.user}>
              {/* {name ? <span>{name} 的代辦</span> : ""} */}
            </button>
          </li>
          <li className={styles.listItem}>
            <NavLink to="/" onClick={Logout} className={styles.logOutButton}>
              登出
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.spacer}></div>
      <TodoInput
        input={input}
        setInput={setInput}
        todoData={todoData}
        setTodoData={setTodoData}
      />
      <Content todoData={todoData} setTodoData={setTodoData} />
    </div>
  );
}


export default TodoList