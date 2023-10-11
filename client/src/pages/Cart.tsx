import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import CartItems from "../components/Cart/CartItems";
const Cart = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <CartItems />
      <ToastContainer theme="dark" />
    </div>
  );
};

export default Cart;
