import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import OrderItems from "../components/OrderItem";
const Orders = () => {
  return (
    <div className="flex flex-col cartbg relative">
      <Navbar />
      <OrderItems />
      <ToastContainer theme="dark" />
    </div>
  );
};

export default Orders;
