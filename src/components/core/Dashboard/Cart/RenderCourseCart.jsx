import React from "react";

import ReactStars from "react-rating-stars-component";
import { TiStarFullOutline } from "react-icons/ti";
import { FaStarHalfAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../../../Slice/cartSlice";
export default function () {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="text-white">
      {cart.map((course, index) => {
        <div>
          <div>
            <img src={course?.thumbNail} alt="coursethumbnail" />
            <div>
              <p>{course?.courseName}</p>
              <p>{course?.category?.name}</p>
            </div>
          </div>
          <div>
            <span>4.8</span>
            <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
              isHalf={true}
              fullIcon={<TiStarFullOutline />}
              halfIcon={<FaStarHalfAlt />}
            />
            <span>{course?.ratingAndReviews.length}ratings</span>
          </div>
          <div>
            <div className="text-pink-700">
              <RiDeleteBin6Line />
              <button onClick={() => dispatch(removeFromCart(course._id))}>
                Remove
              </button>
            </div>
            <p className="text-yellow-25">RS.{course?.price}</p>
          </div>
        </div>;
      })}
    </div>
  );
}
