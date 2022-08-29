import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Completeds from "./Components/Pages/Completeds";
import Incompleteds from "./Components/Pages/Incompleteds";
import AllTasks from "./Components/Pages/AllTasks";
import { useState } from "react";

function App() {

  const [task, setTask] = useState([])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AllTasks task={task} setTask={setTask} />}></Route>
        <Route path="/completeds" element={<Completeds />}></Route>
        <Route path="/incompleteds" element={<Incompleteds />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
