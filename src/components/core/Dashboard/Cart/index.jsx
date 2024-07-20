import React from "react";
import { useSelector } from "react-redux";
import RenderCourseCart from "./RenderCourseCart"
import RenderTotalAmount from "./RenderTotalAmount";

export const Cart = () => {
  const { cart, totalItems, totalPrice } = useSelector((state) => state.cart);
  return (
    <div className="text-white">
      <div>
        <h1>Your Cart</h1>
        <p>{totalItems} courses in cart</p>
      </div>
      <div>
        {cart.length > 0 ? (
          <div>
            <RenderCourseCart />
            <RenderTotalAmount />
          </div>
        ) : (
          <p>Your Cart is Empty</p>
        )}
      </div>
    </div>
  );
};
