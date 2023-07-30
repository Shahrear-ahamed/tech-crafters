import { configureStore } from "@reduxjs/toolkit";
import componentReducer from "./features/component/componentSlice";

export const store = configureStore({
  reducer: {
    component: componentReducer,
  },
});
