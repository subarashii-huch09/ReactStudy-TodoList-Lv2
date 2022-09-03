import styles from "./TodoInput.module.css";
import Swal from "sweetalert2";

const TodoInput = ({ input, setInput, todoData, setTodoData }) => {
  const addTodo = () => {
    if (!input) {
      Swal.fire("請輸入代辦事項內容!", "", "error");
    } else {
      Swal.fire("新增成功!", "", "success");
      // setTodoData((todoData) => [
      //   ...todoData,
      //   { id: Date.now() + Math.random(), description: input, done: false },
      // ]);
      console.log(input)
      setTodoData(() => [
        ...todoData,
        { id: (Date.now() + Math.floor(Math.random() * 1000)), description: input, done: false },
      ]);
      setInput("");
      
    }
  };

  return (
    <div className={styles.inputBox}>
      <input
        type="text"
        placeholder="Please enter todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {/* {console.log(input)} */}
      <button onClick={() => addTodo(input, setInput)}>+</button>
    </div>
  );
};

export default TodoInput;
