// import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

import { createSlice } from "@reduxjs/toolkit";
// import { json } from "react-router-dom";

const initialState = {
  totalItem: localStorage.getItem("totalItem")
    ? JSON.parse(localStorage.getItem("totalItem"))
    : 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    setTotalItems(state, value) {
      state.token = value.payload;
    },
    // add toast
    // remove toast
    // resetCart
  },
});

export const { setTotalItems } = cartSlice.actions;
export default cartSlice.reducer;
