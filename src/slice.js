import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementOne: (state) => {
      state.value++;
    },
    decrementOne: (state) => {
      state.value--;
    },
    increment: (state, action) => {
      state.value += action.payload;
    },
  },
});

const counterReducer = counterSlice.reducer;
console.log(counterReducer);
export { counterReducer };
export const { incrementOne, decrementOne, increment } = counterSlice.actions;

export const selector = (state) => state.counter;
