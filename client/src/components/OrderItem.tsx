import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Rating } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FindTax } from "../services/Tax";
import {
  removeCartProduct,
  removeCartService,
  removeCost,
} from "../store/cartSlice";
import { IRootState } from "../store/store";

const useStyles = makeStyles({
  emptyIcon: {
    color: "white", // Set the color of unfilled stars to white
  },
});

const OrderItems = () => {
  const [totalItems, setTotalItems] = useState(0);

  const classes = useStyles();
  const dispatch = useDispatch();
  const { userData } = useSelector((state: IRootState) => state.user);
  // useEffect(() => {
  //   if (products && services) {
  //     setTotalItems(products.length + services.length);
  //   }
  // }, [products, services]);
  return (
    <div className="w-full min-h-[100vh]">
      <div className="wrapper flex flex-col gap-10 w-[95%] mx-auto mt-[12vh]">
        <h1 className="w-full text-center text-[1.5rem] xl:text-[2.5rem] font-[600]">
          Your Orders - <span>Products</span>{" "}
        </h1>
        <div className="items w-full ">
          {userData.productOrders &&
          Object.keys(userData.productOrders).length > 0 ? (
            <div className="userData w-full  flex flex-col gap-3">
              {userData.productOrders.map((p) => {
                const tax = FindTax("product", p.price);
                const taxVal = tax?.tax;
                const taxName = tax?.taxname;
                return (
                  <div
                    className="eachProd border p-2 border-[#393939] rounded-2xl flex flex-col md:flex-row items-center gap-3"
                    key={p._id}
                  >
                    <div className="img w-[10rem] md:w-[25%] mx-auto">
                      <img src={p.thumbnail} alt="" />
                    </div>
                    <div className="title w-full md:w-[70%] flex flex-col items-center gap-3 xl:gap-5 text-[0.8rem]">
                      <h1 className="text-center w-full xl:text-[1.2rem]">
                        <span>{p.title}</span>
                      </h1>
                      <div className="price w-full flex flex-col gap-3">
                        <h1 className="text-[1rem] xl:text-[1.2rem] font-[500]">
                          Cost <span>Break Up</span>{" "}
                        </h1>
                        <div className="w-full h-[2px] bg-[#09dd6d]"></div>
                        <div className="rowheader w-full flex items-center justify-between text-[0.8rem] xl:text-[1rem] font-[500]">
                          <div className="name1 w-[30%] text-start">MRP</div>
                          <div className="name1 w-[30%]">Tax</div>
                          <div className="name1 w-[30%] text-center">
                            Tax Amnt
                          </div>
                          <div className="name1 w-[30%] text-center">Qnt</div>
                          <div className="name1 w-[30%] text-end">Price</div>
                        </div>
                        <div className="rowvalue md:text-[1.1rem] xl:text-[1.3rem] font-[600] w-full flex items-center justify-between text-[#09dd6d]">
                          <div className="name1 w-[30%] text-start">
                            {p.price && p.price}
                          </div>
                          <div className="name1 w-[30%]">{taxName}</div>
                          <div className="name1 w-[30%] text-center">
                            {Number(taxVal.toFixed(2))}
                          </div>
                          <div className="name1 w-[30%] text-center">
                            {p.quantity && p.quantity}
                          </div>
                          <div className="name1 w-[30%] text-end">
                            {taxVal && p.price && p.price + taxVal}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="w-full justify-center items-center text-[1.2rem] text-center">
              No items added
            </div>
          )}
        </div>
        <h1 className="w-full text-center text-[1.5rem] xl:text-[2.5rem] font-[600]">
          Your Orders - <span>Services</span>{" "}
        </h1>
        <div className="items w-full ">
          {userData.productOrders &&
          Object.keys(userData.productOrders).length > 0 ? (
            <div className="userData w-full  flex flex-col gap-3">
              {userData.serviceOrders.map((p) => {
                const tax = FindTax("service", p.price);
                const taxVal = tax?.tax;
                const taxName = tax?.taxname;
                return (
                  <div
                    className="eachProd border p-2 border-[#393939] rounded-2xl flex flex-col md:flex-row items-center gap-3"
                    key={p._id}
                  >
                    <div className="img w-[10rem] md:w-[25%] mx-auto">
                      <img src={p.thumbnail} alt="" />
                    </div>
                    <div className="title w-full md:w-[70%] flex flex-col items-center gap-3 xl:gap-5 text-[0.8rem]">
                      <h1 className="text-center w-full xl:text-[1.2rem]">
                        <span>{p.title}</span>
                      </h1>
                      <div className="price w-full flex flex-col gap-3">
                        <h1 className="text-[1rem] xl:text-[1.2rem] font-[500]">
                          Cost <span>Break Up</span>{" "}
                        </h1>
                        <div className="w-full h-[2px] bg-[#09dd6d]"></div>
                        <div className="rowheader w-full flex items-center justify-between text-[0.8rem] xl:text-[1rem] font-[500]">
                          <div className="name1 w-[30%] text-start">MRP</div>
                          <div className="name1 w-[30%]">Tax</div>
                          <div className="name1 w-[30%] text-center">
                            Tax Amnt
                          </div>
                          <div className="name1 w-[30%] text-center">Qnt</div>
                          <div className="name1 w-[30%] text-end">Price</div>
                        </div>
                        <div className="rowvalue md:text-[1.1rem] xl:text-[1.3rem] font-[600] w-full flex items-center justify-between text-[#09dd6d]">
                          <div className="name1 w-[30%] text-start">
                            {p.price && p.price}
                          </div>
                          <div className="name1 w-[30%]">{taxName}</div>
                          <div className="name1 w-[30%] text-center">
                            {Number(taxVal.toFixed(2))}
                          </div>
                          <div className="name1 w-[30%] text-center">
                            {p.quantity && p.quantity}
                          </div>
                          <div className="name1 w-[30%] text-end">
                            {taxVal && p.price && p.price + taxVal}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="w-full justify-center items-center text-[1.2rem] text-center">
              No items added
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderItems;
