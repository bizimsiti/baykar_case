"use client";
import React from "react";
import CategoryItem from "./CategoryItem";
import { DataTable } from "./table/table";
import { columns } from "./table/column";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

type Props = {};

const Category = (props: Props) => {
  const incomeData = useSelector((state: RootState) => state.incomes);
  console.log(incomeData);

  const datas = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com"
    }
  ];
  return (
    <section className="rounded p-3 bg-white w-full my-20">
      <DataTable columns={columns} data={incomeData} />
    </section>
  );
};

export default Category;
