import { createSlice } from "@reduxjs/toolkit";

const currentUserId = localStorage.getItem("userId") || null;

const initialState = {
  userId: currentUserId,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
      localStorage.setItem("userId", action.payload);
    },

    logout: (state) => {
      state.userId = null;
      localStorage.removeItem("userId");
    },
  },
});

export const { setUserId, logout } = authSlice.actions;

export const selectUserId = (state) => state.auth.userId;

export default authSlice.reducer;
