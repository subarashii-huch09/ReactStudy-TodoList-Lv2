import Header from "./Header";
import TodoInput from "./TodoInput";
import MainList from "./MainList";
import Content from "./Content";
import { useState } from "react";
import styles from "./TodoList.module.css"
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

const TodoList = () =>{
  const [input, setInput] = useState("");
  const [todoData, setTodoData] = useState(data);

  return (
    <div className={styles.container}>
      <Header />
      <TodoInput
        input={input}
        setInput={setInput}
        todoData={todoData}
        setTodoData={setTodoData}
      />
      <MainList>
        <Content todoData={todoData} setTodoData={setTodoData} />
      </MainList>
    </div>
  );
}


export default TodoList