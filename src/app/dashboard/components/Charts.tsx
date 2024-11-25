"use client";
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

import useMonthlyBalance from "@/hooks/useMontlyBalance";

type Props = {};

const Charts = (props: Props) => {
  const { monthlyBalance } = useMonthlyBalance();

  return (
    <section className="border-white bg-white text-black border-2 flex flex-col justify-center items-center p-3 font-bold text-lg w-full dark:bg-gray-800 dark:text-white rounded-md">
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
            <Line type="monotone" dataKey="total_income" stroke="#16a34a" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="total_expense" stroke="#b91c1c" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Charts;
