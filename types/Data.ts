export interface Data {
  incomeOrexpense: string;
  category: string;
  description: string;
  date: string;
  amount: number;
  id: string;
  month: string;
}

export interface ExpenseData extends Data {
  limit: number;
}

export interface MonthlyTotals {
  month: string;
  total_income: number;
  total_expense: number;
}
