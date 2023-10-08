import { useSelector } from "react-redux";
import Signup from "./pages/Signup";
import { Routes, Route, Navigate } from "react-router-dom";
import { IRootState } from "./store/store";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const { isLoggedIn } = useSelector((state: IRootState) => state.user);
  return (
    <div className="app">
      {!isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      ) : 
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
      }
    </div>
  );
}

export default App;
