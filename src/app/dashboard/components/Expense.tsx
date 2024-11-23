"use client";
import React, { ElementRef, useRef, useState } from "react";
import { Data } from "../../../../types/Data";
import { Plus } from "lucide-react";

type Props = {};

const Expense = (props: Props) => {
  const [amount, setAmount] = useState<number>(0);
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

    expenses.push(expense);
    formRef.current?.reset();
    localStorage.setItem("expenses", JSON.stringify(expenses));
  };
  return (
    <section className="flex flex-col border-2 border-white rounded p-5">
      <form ref={formRef} action={(e) => addExpense(e)}>
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
            <input type="text" id="cat" name="cat" placeholder="kategori" className=" rounded p-3" />
          </div>
          <div className=" flex flex-col  mt-2">
            <label className="text-white" htmlFor="desc">
              Açıklama
            </label>
            <input type="text" id="desc" name="desc" placeholder="açıklama" className="rounded p-3" />
          </div>
          <div className=" flex flex-col  mt-2">
            <label className="text-white" htmlFor="date">
              Tarih
            </label>
            <input type="date" id="date" name="date" className="rounded p-3" />
          </div>

          <div className=" flex flex-col  mt-2">
            <label className="text-white" htmlFor="amount">
              Miktar
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="Miktar"
              className=" rounded p-3"
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
