"use client";
import { getTotal } from "@/helpers/calculateTotal";
import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

const TotalBalance = (props: Props) => {
  const data = useSelector((state: RootState) => state.budget);
  let total = 0;
  data.filter((item) => {
    if (item.incomeOrexpense === "income") {
      total = +item.amount;
    } else {
      total = -item.amount;
    }
  });
  getTotal();
  return (
    <section className="border-white border-2 flex flex-col justify-center items-center p-3 font-bold text-lg text-white w-full ">
      <h3 className="">TOTAL BALANCE</h3>
      <div>{getTotal()}</div>
    </section>
  );
};

export default TotalBalance;
