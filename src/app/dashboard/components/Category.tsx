"use client";
import React, { useEffect, useState } from "react";
import { DataTable } from "./table/table";
import { columns } from "./table/column";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Data } from "../../../../types/Data";

type Props = {};

const Category = (props: Props) => {
  const datas = useSelector((state: RootState) => state.budget);
  const [data, setData] = useState<Data[]>([]);
  useEffect(() => {
    setData(datas);
  }, [datas]);
  const incomeData = [
    {
      incomeOrexpense: "expense",
      category: "asda",
      description: "asdasda",
      date: "2024-11-07",
      amount: 5,
      id: "lxNLbk-GMsD1i2M4tUeBv"
    },
    {
      incomeOrexpense: "income",
      category: "maas",
      description: "123",
      date: "2024-11-08",
      amount: 200,
      id: "1YoZsB-3X9YjHXsOJtxzB"
    },
    {
      incomeOrexpense: "expense",
      category: "maas",
      description: "12312",
      date: "2024-11-22",
      amount: 100,
      id: "gIUFU_uHW4Qb0fMwEdpJg"
    },
    {
      incomeOrexpense: "expense",
      category: "maas",
      description: "12312",
      date: "2024-11-22",
      amount: 100,
      id: "gIUFU_uHW4Qb0fMwEdpJg"
    },
    {
      incomeOrexpense: "expense",
      category: "maas",
      description: "12312",
      date: "2024-11-22",
      amount: 100,
      id: "gIUFU_uHW4Qb0fMwEdpJg"
    },
    {
      incomeOrexpense: "expense",
      category: "maas",
      description: "12312",
      date: "2024-11-22",
      amount: 100,
      id: "gIUFU_uHW4Qb0fMwEdpJg"
    },
    {
      incomeOrexpense: "expense",
      category: "maas",
      description: "12312",
      date: "2024-11-22",
      amount: 100,
      id: "gIUFU_uHW4Qb0fMwEdpJg"
    },
    {
      incomeOrexpense: "expense",
      category: "maas",
      description: "12312",
      date: "2024-11-22",
      amount: 100,
      id: "gIUFU_uHW4Qb0fMwEdpJg"
    },
    {
      incomeOrexpense: "expense",
      category: "maas",
      description: "12312",
      date: "2024-11-22",
      amount: 100,
      id: "gIUFU_uHW4Qb0fMwEdpJg"
    },
    {
      incomeOrexpense: "expense",
      category: "maas",
      description: "12312",
      date: "2024-11-22",
      amount: 100,
      id: "gIUFU_uHW4Qb0fMwEdpJg"
    },
    {
      incomeOrexpense: "expense",
      category: "maas",
      description: "12312",
      date: "2024-11-22",
      amount: 100,
      id: "gIUFU_uHW4Qb0fMwEdpJg"
    },
    {
      incomeOrexpense: "expense",
      category: "maas",
      description: "12312",
      date: "2024-11-22",
      amount: 100,
      id: "gIUFU_uHW4Qb0fMwEdpJg"
    },
    {
      incomeOrexpense: "expense",
      category: "maas",
      description: "12312",
      date: "2024-11-22",
      amount: 100,
      id: "gIUFU_uHW4Qb0fMwEdpJg"
    },
    {
      incomeOrexpense: "expense",
      category: "maas",
      description: "12312",
      date: "2024-11-22",
      amount: 100,
      id: "gIUFU_uHW4Qb0fMwEdpJg"
    },
    {
      incomeOrexpense: "expense",
      category: "maas",
      description: "12312",
      date: "2024-11-22",
      amount: 100,
      id: "gIUFU_uHW4Qb0fMwEdpJg"
    }
  ];
  return (
    <section className="dark:bg-gray-800 dark:text-white rounded-md p-3 bg-white w-full my-20">
      <DataTable columns={columns} data={data} />
    </section>
  );
};

export default Category;
