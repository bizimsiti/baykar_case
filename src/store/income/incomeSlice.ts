import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../../../types/Data";
import { nanoid } from "@reduxjs/toolkit";

const initialState: Data[] = JSON.parse(localStorage.getItem("incomes") as string) || [];

const incomeSlice = createSlice({
  name: "incomes",
  initialState,
  reducers: {
    addIncome: (state, action) => {
      const id = nanoid();
      console.log(id);
      state.push({ ...action.payload, id });
      localStorage.setItem("incomes", JSON.stringify(state));
    }
    // deleteIncome:(state,action)=>{

    // }
  }
});

export default incomeSlice.reducer;
export const { addIncome } = incomeSlice.actions;
