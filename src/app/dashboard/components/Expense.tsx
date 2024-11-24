"use client";
import React, { ElementRef, useRef, useState } from "react";
import { Data } from "../../../../types/Data";
import { Plus } from "lucide-react";
import { formSchema } from "../../../../schemas/formSchema";
import { ZodError } from "zod";

type Props = {};

const Expense = (props: Props) => {
  const [amount, setAmount] = useState<number>(0);
  const [error, setError] = useState<string>("");

  const expenses: Data[] = JSON.parse(localStorage.getItem("expenses") as string) || [];
  const formRef = useRef<ElementRef<"form">>(null);
  const addExpense = (formdata: FormData) => {
    const category = formdata.get("cat") as string;
    const description = formdata.get("desc") as string;
    const date = formdata.get("date") as string;
    const expense: Data = {
      amount,
      category,
      date,
      description
    };

    try {
      const expense: Data = {
        category,
        amount,
        description,
        date
      };
      const { category: cat, amount: am, date: dat, description: desc } = formSchema.parse(expense);
      const validatedExpense: Data = {
        category: cat,
        amount: am,
        description: desc,
        date: dat
      };
      expenses.push(validatedExpense);
      formRef.current?.reset();
      localStorage.setItem("expenses", JSON.stringify(expenses));
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error.issues);
        setError(error.issues[0].message);
      }
    }
  };
  return (
    <section className="flex flex-col border-2 border-white rounded p-5">
      <form ref={formRef} action={(e) => addExpense(e)}>
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
              Kategori
            </label>
            <input
              required
              type="text"
              id="cat"
              name="cat"
              placeholder="kategori"
              className=" rounded p-3 outline-none"
            />
          </div>
          <div className=" flex flex-col  mt-2">
            <label className="text-white" htmlFor="desc">
              Açıklama
            </label>
            <input
              required
              type="text"
              id="desc"
              name="desc"
              placeholder="açıklama"
              className="rounded p-3 outline-none"
            />
          </div>
          <div className=" flex flex-col  mt-2">
            <label className="text-white" htmlFor="date">
              Tarih
            </label>
            <input required type="date" id="date" name="date" className="rounded p-3 outline-none" />
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
              min={"0"}
              placeholder="Miktar"
              className=" rounded p-3 outline-none"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Expense;
