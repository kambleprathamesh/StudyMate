import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../Slice/authSlice";
import profileReducer from "../Slice/profileSlice";
import cartReducer from "../Slice/cartSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  cart: cartReducer,
});

export default rootReducer;
