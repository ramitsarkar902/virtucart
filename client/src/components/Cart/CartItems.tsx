import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store/store";
import { Rating } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FindTax } from "../../services/Tax";
import {
  removeCartProduct,
  removeCartService,
  removeCost,
} from "../../store/cartSlice";
import { useState } from "react";

const useStyles = makeStyles({
  emptyIcon: {
    color: "white", // Set the color of unfilled stars to white
  },
});

const CartItems = () => {
  const [cartId, setCardId] = useState<Array<"">>([]);
  const [totalItems, setTotalItems] = useState(0);

  const classes = useStyles();
  const dispatch = useDispatch();
  const { products, services, totalCost } = useSelector(
    (state: IRootState) => state.cart
  );
  return (
    <div className="w-full min-h-[100vh]">
      <div className="wrapper flex flex-col gap-10 w-[95%] mx-auto mt-[12vh]">
        <h1 className="w-full text-center text-[1.5rem] xl:text-[2.5rem] font-[600]">
          Your Cart - <span>Products</span>{" "}
        </h1>
        <div className="items w-full ">
          {products && Object.keys(products).length > 0 ? (
            <div className="products w-full  flex flex-col gap-3">
              {products.map((p) => {
                const tax = FindTax("product", p.discountedPrice);
                const taxVal = tax?.tax;
                const taxName = tax?.taxname;
                const finVal = p.discountedPrice && taxVal + p.discountedPrice;

                return (
                  <div
                    className="eachProd border p-2 border-[#393939] rounded-2xl flex flex-col md:flex-row items-center gap-3"
                    key={p._id}
                  >
                    <div className="img w-[10rem] md:w-[30%] mx-auto">
                      <img src={p.thumbnail} alt="" />
                    </div>
                    <div className="title w-full md:w-[70%] flex flex-col items-center gap-3 xl:gap-5 text-[0.8rem]">
                      <h1 className="text-center w-full xl:text-[1.2rem]">
                        <span>{p.title}</span>,{" "}
                        {p.description.split(" ").slice(0, 15).join(" ")}...
                      </h1>
                      <div className="row flex items-center w-full justify-between ">
                        <h1 className="font-[500] whitespace-nowrap  text-[0.95rem] xl:text-[1.2rem]">
                          <span
                            className={`${
                              p.stock > 5
                                ? "text-[#09dd6d]"
                                : p.stock !== 0
                                ? "text-yellow-500"
                                : "text-red-500"
                            }`}
                          >
                            {p.stock > 5
                              ? "In Stock"
                              : p.stock !== 0
                              ? `Only ${p.stock} left`
                              : "Out of Stock"}
                          </span>
                        </h1>
                        <Rating
                          name="read-only"
                          size="small"
                          value={p.rating}
                          readOnly
                          precision={0.5}
                          emptyIcon={
                            <StarBorderIcon
                              className={classes.emptyIcon}
                              fontSize="small"
                            />
                          }
                        />
                      </div>
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
                          <div className="name1 w-[30%] text-end">Price</div>
                        </div>
                        <div className="rowvalue md:text-[1.1rem] xl:text-[1.3rem] font-[600] w-full flex items-center justify-between text-[#09dd6d]">
                          <div className="name1 w-[30%] text-start">
                            {p.discountedPrice && p.discountedPrice}
                          </div>
                          <div className="name1 w-[30%]">{taxName}</div>
                          <div className="name1 w-[30%] text-center">
                            {taxVal}
                          </div>
                          <div className="name1 w-[30%] text-end">
                            {taxVal &&
                              p.discountedPrice &&
                              p.discountedPrice + taxVal}
                          </div>
                        </div>
                      </div>
                      <div className="action flex items-center justify-center">
                        <button
                          className="button-var-2"
                          onClick={(e) => {
                            e.preventDefault();
                            if (totalCost >= 0) {
                              dispatch(removeCost(finVal));
                            }
                            dispatch(removeCartProduct(p._id));
                          }}
                        >
                          Remove
                        </button>
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
          Your Cart - <span>Services</span>{" "}
        </h1>
        <div className="items w-full ">
          {services && Object.keys(services).length > 0 ? (
            <div className="services w-full  flex flex-col gap-3">
              {services.map((p) => {
                const tax = FindTax("service", p.price);

                const taxVal = tax?.tax;
                const taxName = tax?.taxname;
                const finVal = p.price && taxVal + p.price;
                return (
                  <div
                    className="eachProd border p-2 border-[#393939] rounded-2xl flex flex-col md:flex-row items-center gap-3"
                    key={p._id}
                  >
                    <div className="img w-[10rem] md:w-[30%] mx-auto">
                      <img src={p.thumbnail} alt="" />
                    </div>
                    <div className="title w-full md:w-[60%] flex flex-col items-center gap-3 xl:gap-5 text-[0.8rem]">
                      <h1 className="text-center w-full xl:text-[1.2rem]">
                        <span>{p.title}</span>,{" "}
                        {p.description.split(" ").slice(0, 10).join(" ")}...
                      </h1>
                      <div className="row flex items-center w-full justify-between ">
                        <Rating
                          name="read-only"
                          size="small"
                          value={p.rating}
                          readOnly
                          precision={0.5}
                          emptyIcon={
                            <StarBorderIcon
                              className={classes.emptyIcon}
                              fontSize="small"
                            />
                          }
                        />
                      </div>
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
                          <div className="name1 w-[30%] text-end">Price</div>
                        </div>
                        <div className="rowvalue md:text-[1.1rem] xl:text-[1.3rem] font-[600] w-full flex items-center justify-between text-[#09dd6d]">
                          <div className="name1 w-[30%] text-start">
                            {p.price && p.price}
                          </div>
                          <div className="name1 w-[30%]">{taxName}</div>
                          <div className="name1 w-[30%] text-center">
                            {taxVal}
                          </div>
                          <div className="name1 w-[30%] text-end">
                            {taxVal && p.price && p.price + taxVal}
                          </div>
                        </div>
                      </div>
                      <div className="action flex items-center justify-center">
                        <button
                          className="button-var-2"
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(removeCost(finVal));
                            dispatch(removeCartService(p._id));
                          }}
                        >
                          Remove
                        </button>
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
        <div className="checkout w-full flex flex-col gap-3">
          <h1 className="text-[3rem] font-[600]">
            Check<span>out</span>
          </h1>
          <div className="row1 w-full flex items-center justify-between">
            <h1 className="text-[1.3rem] font-[500]">
              Total Items : <span>{totalItems}</span>
            </h1>
            <h1 className="text-[1.3rem] font-[500]">
              Total Cost : <span>{totalCost.toFixed(2)}</span>
            </h1>
          </div>
        </div>
        {/* <h1>Your Cart - <span>Services</span> </h1> */}
      </div>
    </div>
  );
};

export default CartItems;
