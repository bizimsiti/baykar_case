"use client";
import React, { ChangeEvent, ElementRef, FormEvent, useEffect, useRef, useState } from "react";
import { Data, ExpenseData } from "../../../../types/Data";
import { Plus } from "lucide-react";
import { formSchema } from "../../../../schemas/formSchema";
import { input, ZodError } from "zod";
import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "@/store/budget/budgetSlice";
import { RootState } from "@/store/store";
import { stat } from "fs";

type Props = {};

const Expense = (props: Props) => {
  const data = useSelector((state: RootState) => state.budget);
  const expensesData = data.filter((item) => item.incomeOrexpense === "expense");
  const [expenses, setExpenses] = useState<Data[]>([]);
  useEffect(() => {
    setExpenses(expensesData);
  }, [addExpense]);

  const dispatch = useDispatch();

  const [error, setError] = useState<string>("");
  const [formData, setFormData] = useState<ExpenseData>({
    limit: 0,
    incomeOrexpense: "",
    category: "",
    description: "",
    date: "",
    amount: 0,
    id: "",
    month: ""
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(addExpense(formData));

    setFormData({
      limit: 0,
      incomeOrexpense: "",
      category: "",
      description: "",
      date: "",
      amount: 0,
      id: "",
      month: ""
    });
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);

    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "amount" ? Number(value) : value
    }));
  };

  return (
    <section className="flex flex-col border-2 border-white rounded p-5">
      <form onSubmit={handleSubmit}>
        {error && <div className="text-sm border border-red-600 bg-red-600 text-white">{error}</div>}
        <button
          id="income"
          type="submit"
          className="w-full text-darkblue  bg-white p-2 flex items-center font-medium text-lg text-center justify-center self-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          GİDER EKLE
        </button>
        <div className=" flex flex-col mt-2">
          <div className=" flex flex-col  mt-2">
            <label className="text-white" htmlFor="cat">
              Yeni Kategori Ekle
            </label>
            <input
              required
              type="text"
              id="category"
              name="category"
              placeholder="kategori"
              className=" rounded p-3 outline-none"
              value={formData.category}
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col  mt-2">
            <label className="text-white" htmlFor="cars">
              Kategori seç
            </label>
            <select name="cars" id="cars" className=" rounded p-3 outline-none">
              {expenses && expenses.map((expense) => <option value={expense.category}>{expense.category}</option>)}
            </select>
          </div>
          <div className=" flex flex-col  mt-2">
            <label className="text-white" htmlFor="desc">
              Açıklama
            </label>
            <input
              required
              type="text"
              id="description"
              name="description"
              placeholder="açıklama"
              className="rounded p-3 outline-none"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col  mt-2">
            <label className="text-white" htmlFor="date">
              Tarih
            </label>
            <input
              required
              type="date"
              id="date"
              name="date"
              className="rounded p-3 outline-none"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col  mt-2">
            <label className="text-white" htmlFor="limit">
              Harcama Limiti
            </label>
            <input
              required
              type="text"
              id="limit"
              name="limit"
              className="rounded p-3 outline-none"
              value={formData.limit}
              onChange={handleChange}
            />
          </div>

          <div className=" flex flex-col  mt-2">
            <label className="text-white" htmlFor="amount">
              Miktar
            </label>
            <input
              required
              type="number"
              id="amount"
              name="amount"
              placeholder="Miktar"
              className=" rounded p-3 outline-none"
              value={formData.amount}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Expense;
