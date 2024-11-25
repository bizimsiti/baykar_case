"use client";
import { getTotal } from "@/helpers/calculateTotal";
import { RootState } from "@/store/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type Props = {};

const TotalBalance = (props: Props) => {
  // const data = useSelector((state: RootState) => state.budget);
  // const [total, setTotal] = useState<string>("0");
  // useEffect(() => {
  //   setTotal(getTotal());
  // }, [data]);

  return (
    <section className="border-white border-2 flex flex-col justify-center items-center p-3 font-bold text-lg text-white w-full ">
      <h3 className="">TOTAL BALANCE</h3>
      <div>{0}</div>
    </section>
  );
};

export default TotalBalance;
