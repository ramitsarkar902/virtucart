import { Navigate, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { IRootState } from "./store/store";
import { setActive, setActiveUrl } from "./store/userSlice";
import Product from "./pages/Product";

function App() {
  const { activeUrl } = useSelector((state: IRootState) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const path = window.location.pathname;
    dispatch(setActiveUrl(path));
  }, [window.location.pathname]);
  /* if (activeUrl !== "" && (activeUrl === "/home" || activeUrl === "/")) {
    dispatch(setActive(2));
  } else if (activeUrl !== "" && activeUrl.includes("/products")) {
    dispatch(setActive(3));
  } else if (activeUrl !== "" && activeUrl === "/services") {
    dispatch(setActive(4));
  } */
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
