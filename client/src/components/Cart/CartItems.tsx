import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store";
import { Rating } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  emptyIcon: {
    color: "white", // Set the color of unfilled stars to white
  },
});

const CartItems = () => {
  const classes = useStyles();
  const { products } = useSelector((state: IRootState) => state.cart);
  return (
    <div className="w-full min-h-[100vh]">
      <div className="wrapper flex flex-col gap-5 w-[95%] mx-auto mt-[12vh]">
        <h1 className="w-full text-center text-[1.5rem] font-[600]">
          Your Cart - <span>Products</span>{" "}
        </h1>
        <div className="items w-full ">
          {products && Object.keys(products).length > 0 ? (
            <div className="products w-full  flex flex-col gap-3">
              {products.map((p) => {
                return (
                  <div
                    className="eachProd border p-2 border-[#393939] rounded-2xl flex flex-col items-center gap-3"
                    key={p._id}
                  >
                    <div className="img w-[10rem] mx-auto">
                      <img src={p.thumbnail} alt="" />
                    </div>
                    <div className="title flex flex-col items-center gap-3 text-[0.8rem]">
                      <h1 className="text-center">
                        <span>{p.title}</span>,{" "}
                        {p.description.split(" ").slice(0, 10).join(" ")}...
                      </h1>
                      <div className="row flex items-center w-full justify-between">
                        <h1 className="font-[500] whitespace-nowrap  text-[0.95rem]">
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
                      <div className="price flex flex-col">
                        <h1>Cost Break up</h1>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>No items added.</div>
          )}
        </div>
        {/* <h1>Your Cart - <span>Services</span> </h1> */}
      </div>
    </div>
  );
};

export default CartItems;
