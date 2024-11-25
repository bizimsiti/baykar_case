import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Data, ExpenseData } from "../../../types/Data";

type CategorizedData = Record<string, ExpenseData[]>;
const selectBudget = (state: RootState) => state.budget as ExpenseData[];
export const selectExpenses = createSelector([selectBudget], (budget) => {
  const expenses = budget.filter((item) => item.incomeOrexpense === "expense");
  const categorizedData = expenses.reduce((acc, curr) => {
    const category = curr.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(curr);
    return acc;
  }, {} as CategorizedData);
  return { expenses, categorizedData };
});
