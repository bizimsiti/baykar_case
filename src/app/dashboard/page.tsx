import React from "react";
import Income from "./components/Income";
import Expense from "./components/Expense";
import TotalBalance from "./components/TotalBalance";
import BudgetTable from "./components/BudgetTable";
import Charts from "./components/Charts";
import ToggleTheme from "@/components/_components/ToggleTheme";
import Category from "./components/Category";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="flex flex-col flex-wrap md:justify-around md:flex-row lg:max-w-[1000px] gap-2 pt-7 m-auto lg:mt-20 ">
      {/* Income component */}
      <Income />
      {/* Expense component */}
      <Expense />
      {/* TotalBalance component */}
      <TotalBalance />
      {/* categories */}
      <Category />
      {/* Budget table */}
      <BudgetTable />
      {/* charts */}
      <Charts />
    </main>
  );
};

export default page;
