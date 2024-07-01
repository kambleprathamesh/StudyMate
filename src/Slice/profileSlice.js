import { createSlice } from "@reduxjs/toolkit";
// import { json } from "react-router-dom";

const initialState = {
  user: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setUser(state, value) {
      state.token = value.payload;
    },
  },
});

export const { setUser } = profileSlice.actions;
export default profileSlice.reducer;
