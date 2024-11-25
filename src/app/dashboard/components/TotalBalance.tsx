"use client";
import { getTotal } from "@/helpers/calculateTotal";
import useBudgetTotals from "@/hooks/useTotalBalance";
import { RootState } from "@/store/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type Props = {};

const TotalBalance = (props: Props) => {
  const { totalBalanceFormatted, totalBalance } = useBudgetTotals();
  return (
    <section
      className={`border-2 flex flex-col justify-center items-center p-3 font-bold text-lg w-full rounded-md ${
        totalBalance < 0 ? "border-red-700 text-white bg-red-700" : "border-green-600 text-white bg-green-600"
      }`}
    >
      <h3 className="">TOTAL BALANCE</h3>
      <div>{totalBalanceFormatted}</div>
    </section>
  );
};

export default TotalBalance;
