import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from "./Components/Header/Header";
import Completeds from "./Components/Pages/Completeds";
import Incompleteds from "./Components/Pages/Incompleteds";
import AllTasks from "./Components/Pages/AllTasks";

function App() {
  return ( 
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AllTasks />}></Route>
        <Route path="/completeds" element={<Completeds />}></Route>
        <Route path="/incompleteds" element={<Incompleteds />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App;
