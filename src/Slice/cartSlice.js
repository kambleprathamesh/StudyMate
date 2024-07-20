// import { createSlice } from "@reduxjs/toolkit"
// import { toast } from "react-hot-toast"

// const initialState = {
//   cart: localStorage.getItem("cart")
//     ? JSON.parse(localStorage.getItem("cart"))
//     : [],
//   total: localStorage.getItem("total")
//     ? JSON.parse(localStorage.getItem("total"))
//     : 0,
//   totalItems: localStorage.getItem("totalItems")
//     ? JSON.parse(localStorage.getItem("totalItems"))
//     : 0,
// }

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const course = action.payload
//       const index = state.cart.findIndex((item) => item._id === course._id)

//       if (index >= 0) {
//         // If the course is already in the cart, do not modify the quantity
//         toast.error("Course already in cart")
//         return
//       }
//       // If the course is not in the cart, add it to the cart
//       state.cart.push(course)
//       // Update the total quantity and price
//       state.totalItems++
//       state.total += course.price
//       // Update to localstorage
//       localStorage.setItem("cart", JSON.stringify(state.cart))
//       localStorage.setItem("total", JSON.stringify(state.total))
//       localStorage.setItem("totalItems", JSON.stringify(state.totalItems))
//       // show toast
//       toast.success("Course added to cart")
//     },
//     removeFromCart: (state, action) => {
//       const courseId = action.payload
//       const index = state.cart.findIndex((item) => item._id === courseId)

//       if (index >= 0) {
//         // If the course is found in the cart, remove it
//         state.totalItems--
//         state.total -= state.cart[index].price
//         state.cart.splice(index, 1)
//         // Update to localstorage
//         localStorage.setItem("cart", JSON.stringify(state.cart))
//         localStorage.setItem("total", JSON.stringify(state.total))
//         localStorage.setItem("totalItems", JSON.stringify(state.totalItems))
//         // show toast
//         toast.success("Course removed from cart")
//       }
//     },
//     resetCart: (state) => {
//       state.cart = []
//       state.total = 0
//       state.totalItems = 0
//       // Update to localstorage
//       localStorage.removeItem("cart")
//       localStorage.removeItem("total")
//       localStorage.removeItem("totalItems")
//     },
//   },
// })

// export const { addToCart, removeFromCart, resetCart } = cartSlice.actions

// export default cartSlice.reducer

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],

  totalPrice: localStorage.getItem("total")
    ? JSON.parse(localStorage.getItem("total"))
    : 0,
  toatlItem: localStorage.getItem("totalItem")
    ? JSON.parse(localStorage.getItem("totalItem"))
    : 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const course = action.payload;
      const index = state.cart.findIndex((item) => item._id === course._id);

      // if course already prsent do not add in the quanity send a toast
      if (index >= 0) {
        toast.error("Course Already Prsent in the Cart");
      }

      // if course not present
      state.cart.push(course);

      // update the quantity
      state.toatlItem++;

      // update the total price
      state.totalPrice += course.price;

      // update the localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("toatlItem", JSON.stringify(state.toatlItem));
      localStorage.setItem("totalprice", JSON.stringify(state.totalPrice));

      // show toast
      toast.success("Item Added in the Cart");
    },

    removeFromCart: (state, action) => {
      const course = action.payload;
      const index = state.cart.findIndex((item) => item._id === course._id);

      // check if cousre presnt in the cart..if present remove
      if (index >= 0) {
        // ccourse present in the cart

        // decrease the toatal quantity count
        state.toatlItem--;

        //decrese the price
        state.totalPrice -= state.cart[index].price;

        // remove from cart
        state.cart.splice(index, 1);

        // update localStorage
        localStorage.setitem("cart", JSON.stringify(state.cart));
        localStorage.setItem("totalItem", JSON.stringify(state.toatlItem));
        localStorage.setItem("toatlPrice", JSON.stringify(state.totalPrice));

        // show toast
        toast.success("Item Removed from cart");
      }
    },

    resetCart: (state) => {
      state.toatlItem = 0;
      state.totalPrice = 0;
      state.cart = 0;
      // update localStorage
      localStorage.removeItem("cart");
      localStorage.removeItem("totalItem");
      localStorage.removeItem("totalPrice");
    },
  },
});
export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
