"use client";
import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Data, MonthlyTotals } from "../../../../types/Data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { getMontyChange } from "@/store/budget/budgetSlice";
import useMonthlyBalance from "@/hooks/useMontlyBalance";

type Props = {};

const Charts = (props: Props) => {
  const { monthlyBalance } = useMonthlyBalance();

  return (
    <section className="border-white border-2 flex flex-col justify-center items-center p-3 font-bold text-lg text-white w-full dark:bg-gray-800 dark:text-white rounded-md">
      <h3 className="mb-3">Charts</h3>
      <div className="w-full min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={monthlyBalance}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="total_income" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="total_expense" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Charts;
