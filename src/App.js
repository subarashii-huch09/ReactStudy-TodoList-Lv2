import styles  from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login"

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
