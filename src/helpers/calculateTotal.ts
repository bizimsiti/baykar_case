import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { formatCurrency } from "./formatCurrency";

export const getTotal = (): string => {
  const data = useSelector((state: RootState) => state.budget);
  const incomes = data.filter((item) => item.incomeOrexpense === "income");
  const expenses = data.filter((item) => item.incomeOrexpense === "expense");
  const incomesTotal = incomes.reduce((arr, curr) => arr + curr.amount, 0);
  const expensesTotal = expenses.reduce((arr, curr) => arr + curr.amount, 0);
  const totalBalance = incomesTotal - expensesTotal;

  return formatCurrency(totalBalance);
};
