import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store";

const Section1 = () => {
  const { product } = useSelector((state: IRootState) => state.product);
  return (
    <div className="h-[100vh] mt-[10vh] w-full">
      <div className="wrapper flex flex-col w-[95%] mx-auto py-2">
        <div className="section1 flex flex-col gap-3">
          <div className="img">
            {product && product.thumbnail ? (
              <img src={product.thumbnail} alt="" className="rounded-2xl" />
            ) : (
              <div>Loading Image...</div>
            )}
          </div>
          <div className="desc flex justify-between">
            <h1 className="text-[1.4rem] font-[500]">{product &&  product.title && product.title}</h1>
            <h1 className="text-[0.8rem]">
              <span>{product &&  product.brand &&product.brand}</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
