"use client";
import React, { ChangeEvent, ElementRef, FormEvent, useRef, useState } from "react";
import { Data } from "../../../../types/Data";
import { Plus } from "lucide-react";
import { useDispatch } from "react-redux";
import { addIncome, getMontyChange } from "@/store/budget/budgetSlice";

type Props = {};

const Income = (props: Props) => {
  const dispatch = useDispatch();

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

    if (formData.amount <= 0) {
      alert("Miktar 0'dan büyük olmalıdır.");
      return;
    }
    dispatch(addIncome(formData));
    dispatch(getMontyChange(""));

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
      [name]: name === "amount" ? (isNaN(Number(value)) ? 0 : Number(value)) : value
    }));
  };

  return (
    <section className="dark:bg-gray-800 dark:text-white flex flex-col border-2 border-white dark:border-gray-500 rounded-md p-5">
      <form ref={formRef} onSubmit={handleSubmit}>
        <button
          id="income"
          type="submit"
          className="dark:bg-gray-500 dark:text-white  w-full text-darkblue bg-white p-2 flex items-center font-medium text-lg text-center justify-center self-center hover:bg-gray-500 hover:text-white rounded-sm transition-all duration-300 active:bg-white active:text-gray-500 dark:hover:bg-white dark:hover:text-gray-500 dark:active:bg-gray-500 dark:active:text-white"
        >
          <Plus className="h-5 w-5 mr-2" />
          ADD INCOME
        </button>
        <div className=" flex flex-col mt-2">
          <div className=" flex flex-col  mt-2">
            <label className="text-white" htmlFor="cat">
              Category
            </label>
            <input
              required
              type="text"
              id="category"
              name="category"
              placeholder="kategori"
              className="dark:bg-gray-500 dark:text-white  rounded p-3 outline-none"
              value={formData.category}
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col  mt-2">
            <label className="text-white" htmlFor="desc">
              Description
            </label>
            <input
              required
              type="text"
              id="description"
              name="description"
              placeholder="açıklama"
              className="dark:bg-gray-500 dark:text-white  rounded p-3 outline-none"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col  mt-2">
            <label className="text-white" htmlFor="date">
              Date
            </label>
            <input
              required
              type="date"
              id="date"
              name="date"
              className="dark:bg-gray-500 dark:text-white  rounded p-3 outline-none"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className=" flex flex-col  mt-2">
            <label className="text-white" htmlFor="amount">
              Amount
            </label>
            <input
              required
              type="number"
              id="amount"
              name="amount"
              placeholder="Miktar"
              className="dark:bg-gray-500 dark:text-white  rounded p-3 outline-none"
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
