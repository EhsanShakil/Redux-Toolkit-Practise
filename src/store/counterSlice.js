import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "Counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => ({
      count: state.count + 1,
    }),
    decrement: (state) => ({
      count: state.count - 1,
    }),
  },
});
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
