import { Navigate, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Signup from "./pages/Signup";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
