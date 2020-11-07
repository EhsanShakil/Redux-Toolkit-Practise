import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const updateCounter = createAsyncThunk(
  "counter/updateCounter",
  async (value, thunkAPI) => {
    const response = await fetch("http://localhost:3004/api/updatecounter");
    const data = response.json();
    return data;
  }
);

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
