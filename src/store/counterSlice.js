import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const updateCounter = createAsyncThunk(
  "counter/updateCounter",
  async (value, thunkAPI) => {
    const response = await fetch("http://localhost:3004/api/updatecounter");
    const data = await response.json();
    return data;
  }
);

export const counterSlice = createSlice({
  name: "Counter",
  initialState: {
    count: 0,
    isLoading: false,
    error: "",
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
  extraReducers: {
    [updateCounter.pending]: (state) => {
      state.isLoading = true;
    },
    [updateCounter.rejected]: (state) => {
      state.isLoading = false;
      state.error = "no data found";
    },
    [updateCounter.fulfilled]: (state, action) => {
      state.count += action.payload;
      state.isLoading = false;
    },
  },
});
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
