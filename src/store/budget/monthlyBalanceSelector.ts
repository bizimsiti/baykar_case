import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { calculateMonthlyTotals } from "@/helpers/calculateMontlyChange";

const selectBudget = (state: RootState) => state.budget;

export const selectMonthlyBalance = createSelector([selectBudget], (budget) => {
  const monthlyBalance = calculateMonthlyTotals(budget);
  localStorage.setItem("montlychange", JSON.stringify(monthlyBalance));
  return {
    monthlyBalance
  };
});
