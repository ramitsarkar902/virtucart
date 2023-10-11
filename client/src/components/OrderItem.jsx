import React from "react";
import ProductCart from "./Product/ProductCart";

const OrderItem = () => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap -mb-4">
      {productOrders.map(({ id, title, description, thumbnail, price }) => (
        <ProductCart
          key={id}
          id={id}
          title={title}
          description={description}
          picture={picture}
          price={price}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default OrderItem;
