export interface Data {
  incomeOrexpense: string;
  category: string;
  description: string;
  date: string;
  amount: number;
  id: string;
}

export interface ExpenseData extends Data {
  limit: number;
}

export interface Budget {
  incomes: Data[];
  expenses: ExpenseData[];
}
