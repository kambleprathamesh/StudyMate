import React from "react";
import { useSelector } from "react-redux";
import IconBtn from "../../../Common/IconBtn";
export default function RenderTotalAmount() {
  const { toatlPrice, cart } = useSelector((state) => state.cart);
  const handlebuyCourse = () => {
    const courses = cart.map((course) => course._id);
    console.log("You Have Purchaes thse Courses:", courses);
  };
  return (
    <div>
      <div>
        <p>Total</p>
        <h1>RS{toatlPrice}</h1>
      </div>
      <div>
        <IconBtn text="Buy Course" onClick={handlebuyCourse} />
      </div>
    </div>
  );
}
