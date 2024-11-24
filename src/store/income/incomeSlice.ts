import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Data } from "../../../types/Data";

const initialState: Data[] = [];

const incomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {
    addIncome: (state, action) => {
      console.log(action.payload);
      state.push(action.payload);
      localStorage.setItem("incomes", JSON.stringify(state));
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addIncomeAsync.fulfilled, (state) => {
      console.log();
    });
  }
});

export const addIncomeAsync = createAsyncThunk("income/addIncomeAsync", async () => {
  await new Promise((resolve) => setTimeout(() => resolve, 1000));
});

export default incomeSlice.reducer;
export const { addIncome } = incomeSlice.actions;
