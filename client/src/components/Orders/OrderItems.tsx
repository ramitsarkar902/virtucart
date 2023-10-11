
import { ToastContainer } from "react-toastify";
import Navbar from "../Navbar";
import CartItems from "../Cart/CartItems";

const Cart = () => {
  return (
    <div className="flex flex-col cartbg relative">
      <Navbar />
      <CartItems />
      <ToastContainer theme="dark" />
    </div>
  );
};

export default Cart;

