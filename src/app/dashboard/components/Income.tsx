"use client";
import React, { ChangeEvent, ElementRef, FormEvent, useRef, useState } from "react";
import { Data } from "../../../../types/Data";
import { Plus } from "lucide-react";
import { useDispatch } from "react-redux";
import { addIncome } from "@/store/budget/budgetSlice";

type Props = {};

const Income = (props: Props) => {
  const dispatch = useDispatch();
  const [error, setError] = useState<string>("");

  const formRef = useRef<ElementRef<"form">>(null);
  const [formData, setFormData] = useState<Data>({
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

    dispatch(addIncome(formData));

    setFormData({
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

    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "amount" ? Number(value) : value
    }));
  };

  return (
    <section className="flex flex-col border-2 border-white roun p-5">
      <form ref={formRef} onSubmit={handleSubmit}>
        {error && <div className="text-sm border border-red-600 bg-red-600 text-white">{error}</div>}
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

export default Income;
