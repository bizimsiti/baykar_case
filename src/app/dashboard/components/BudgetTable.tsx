"use client";
import React, { useEffect, useState } from "react";
import { DataTable } from "./table/table";
import { columns } from "./table/column";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Data } from "../../../../types/Data";

type Props = {};

const BudgetTable = (props: Props) => {
  const datas = useSelector((state: RootState) => state.budget);
  const [data, setData] = useState<Data[]>([]);
  useEffect(() => {
    setData(datas);
  }, [datas]);
  return (
    <section className="dark:bg-gray-800 dark:text-white rounded-md p-3 bg-white w-full my-20">
      <DataTable columns={columns} data={data} />
    </section>
  );
};

export default BudgetTable;
