import { configureStore } from "@reduxjs/toolkit";
import incomeReducer from "./income/incomeSlice";

export const store = configureStore({
  reducer: {
    incomes: incomeReducer
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;