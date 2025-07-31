import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice";
import { meyvelerReducer } from "./meyveSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    meyveler: meyvelerReducer,
  },
});
