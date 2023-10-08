import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNewlyLaunchedProd } from "../apis/api";
import { ToastContainer, toast } from "react-toastify";

const NewLaunched = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchNewlyLaunchedProd = async () => {
      const res = await getNewlyLaunchedProd(dispatch);
      if (typeof res === "string") {
        toast.warn(res);
      }
    };
    fetchNewlyLaunchedProd();
  }, []);
  return (
    <div className="w-full min-h-[100vh] flex flex-col">
      <div className="wrapper w-[95%] mx-auto min-h-[100vh]">
        <div className="items flex flex-col sm:flex-wrap">Hello</div>
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default NewLaunched;
