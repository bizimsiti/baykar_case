import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Data } from "../../../types/Data";
import { nanoid } from "@reduxjs/toolkit";
import { getMonth } from "date-fns";
import { months } from "@/helpers/months";
import { calculateMonthlyTotals } from "@/helpers/calculateMontlyChange";
const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(key);
};

const initialState: Data[] = getFromLocalStorage("budget") ? JSON.parse(getFromLocalStorage("budget") as string) : [];

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    addIncome: (state, action: PayloadAction<Data>) => {
      const id = nanoid();
      const monthIndex = getMonth(action.payload.date);

      state.push({ ...action.payload, id, incomeOrexpense: "income", month: months[monthIndex] });
      localStorage.setItem("budget", JSON.stringify(state));
    },
    addExpense: (state, action: PayloadAction<Data>) => {
      const id = nanoid();
      const monthIndex = getMonth(action.payload.date);
      const category = action.payload.category;
      const existingExpenseIndex = state.findIndex(
        (item) => item.category === category && item.incomeOrexpense === "expense"
      );

      if (existingExpenseIndex !== -1) {
        const existingExpense = state[existingExpenseIndex];

        state[existingExpenseIndex] = {
          ...existingExpense,
          amount: existingExpense.amount + action.payload.amount
        };
      } else {
        state.push({
          ...action.payload,
          id,
          incomeOrexpense: "expense",
          month: months[monthIndex]
        });
      }
      localStorage.setItem("budget", JSON.stringify(state));
    },
    deleteData: (state, action: PayloadAction<string>) => {
      state.splice(
        state.findIndex((item) => item.id === action.payload),
        1
      );
      localStorage.setItem("budget", JSON.stringify(state));
    },
    getMontyChange: (state, action) => {
      const montlyBalance = calculateMonthlyTotals(state);
      localStorage.setItem("montlychange", JSON.stringify(montlyBalance));
      action.payload = montlyBalance;
    }
  }
});

export default budgetSlice.reducer;
export const { addIncome, deleteData, addExpense, getMontyChange } = budgetSlice.actions;
