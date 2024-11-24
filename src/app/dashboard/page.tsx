import React from "react";
import Income from "./components/Income";
import Expense from "./components/Expense";
import TotalBalance from "./components/TotalBalance";
import Category from "./components/Category";
import Charts from "./components/Charts";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="flex flex-col flex-wrap md:justify-around md:flex-row lg:max-w-[1000px] gap-2 pt-7 m-auto lg:mt-20 bg-backgroundtheme">
      {/* Income component */}
      <Income />
      {/* Expense component */}
      <Expense />
      {/* TotalBalance component */}
      <TotalBalance />
      {/* Categories */}
      <Category />
      {/* charts */}
      <Charts />
    </main>
  );
};

export default page;
