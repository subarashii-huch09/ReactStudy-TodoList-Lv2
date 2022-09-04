import styles  from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import TodoList from "./components/TodoList"
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <div className={styles.App}>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/todos" element={<TodoList />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
    </div>
  );
}

export default App;
