import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Budget, Data } from "../../../types/Data";
import { nanoid } from "@reduxjs/toolkit";

const initialState: Data[] = JSON.parse(localStorage.getItem("budget") as string) || [];

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    addIncome: (state, action: PayloadAction<Data>) => {
      const id = nanoid();

      state.push({ ...action.payload, id, incomeOrexpense: "income" });
      localStorage.setItem("budget", JSON.stringify(state));
    },
    addExpense: (state, action: PayloadAction<Data>) => {
      const id = nanoid();
      state.push({ ...action.payload, id, incomeOrexpense: "expense" });
      localStorage.setItem("budget", JSON.stringify(state));
    },
    deleteData: (state, action) => {
      state.splice(
        state.findIndex((item) => item.id === action.payload),
        1
      );
      localStorage.setItem("budget", JSON.stringify(state));
    }
  }
});

export default budgetSlice.reducer;
export const { addIncome, deleteData, addExpense } = budgetSlice.actions;
