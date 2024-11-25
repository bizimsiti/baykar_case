"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { selectExpenses } from "@/store/budget/expensesSelector";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

const Category = (props: Props) => {
  const { categorizedData } = useSelector(selectExpenses);

  return (
    <section className="dark:bg-gray-800 dark:text-white rounded-md p-3 bg-white w-full my-20">
      <Table>
        <TableCaption>Expense Category List</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Category</TableHead>
            <TableHead>Limit</TableHead>
            <TableHead>Spending</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(categorizedData).map(([category, items]) =>
            items.map((item) => (
              <TableRow
                key={item.category}
                className={`${item.amount >= item.limit * 0.8 ? "bg-red-600 text-white hover:bg-red-500" : ""}`}
              >
                <TableCell className="font-medium">{item.category}</TableCell>
                <TableCell>{item.limit}</TableCell>
                <TableCell>{item.amount}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </section>
  );
};

export default Category;
