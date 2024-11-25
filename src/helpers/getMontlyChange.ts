import { Data, MonthlyTotals } from "../../types/Data";

export const calculateMonthlyTotals = (state: Data[]): MonthlyTotals[] => {
  const monthlyTotals: Record<string, { income: number; expense: number }> = {};

  state.forEach((entry) => {
    const { month, incomeOrexpense, amount } = entry;

    if (!monthlyTotals[month]) {
      monthlyTotals[month] = { income: 0, expense: 0 };
    }

    if (incomeOrexpense === "income") {
      monthlyTotals[month].income += amount;
    } else if (incomeOrexpense === "expense") {
      monthlyTotals[month].expense += amount;
    }
  });

  return Object.entries(monthlyTotals).map(([month, totals]) => ({
    month,
    total_income: totals.income,
    total_expense: totals.expense
  }));
};
