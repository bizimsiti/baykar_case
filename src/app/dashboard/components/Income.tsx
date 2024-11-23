"use client";
import React, { ElementRef, useRef, useState } from "react";
import { Data } from "../../../../types/Data";
import { Plus } from "lucide-react";

type Props = {};

const Income = (props: Props) => {
  const [amount, setAmount] = useState<number>(0);

  const incomes: Data[] = JSON.parse(localStorage.getItem("incomes") as string) || [];
  const formRef = useRef<ElementRef<"form">>(null);
  const addIncome = (formData: FormData) => {
    const category = formData.get("cat") as string;
    const description = formData.get("desc") as string;
    const date = formData.get("date") as string;

    const income: Data = {
      category,
      amount,
      description,
      date
    };
    console.log(incomes);

    incomes.push(income);
    formRef.current?.reset();
    localStorage.setItem("incomes", JSON.stringify(incomes));
  };
  return (
    <section className="flex flex-col border-2 border-white roun p-5">
      <form ref={formRef} action={addIncome}>
        <button
          id="income"
          type="submit"
          className="w-full text-darkblue bg-white p-2 flex items-center font-medium text-lg text-center justify-center self-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          GELİR EKLE
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

export default Income;
