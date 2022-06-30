import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./Views/Register";
import Login from "./Views/Login";
import Home from "./Views/Home";

function App() {
  const History = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register navigate={History} />} />
        <Route path="/Login" element={<Login />} navigate={History} />
      </Routes>
    </div>
  );
}

export default App;
