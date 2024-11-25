import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectBudget = (state: RootState) => state.budget;

export const selectTotals = createSelector([selectBudget], (budget) => {
  const incomesTotal = budget
    .filter((item) => item.incomeOrexpense === "income")
    .reduce((arr, curr) => arr + curr.amount, 0);

  const expensesTotal = budget
    .filter((item) => item.incomeOrexpense === "expense")
    .reduce((arr, curr) => arr + curr.amount, 0);

  return {
    totalBalance: incomesTotal - expensesTotal
  };
});
