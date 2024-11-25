"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Data } from "../../../../../types/Data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Trash2, Pencil } from "lucide-react";
import { deleteData } from "@/store/budget/budgetSlice";
import { store } from "@/store/store";

export const columns: ColumnDef<Data>[] = [
  {
    accessorKey: "incomeOrexpense",
    header: "Income or Expense"
  },
  {
    accessorKey: "category",
    header: "Category"
  },
  {
    accessorKey: "date",
    header: "Date"
  },
  {
    accessorKey: "description",
    header: "Description"
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("tr-TR", {
        style: "currency",
        currency: "TRY"
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    }
  },
  {
    accessorKey: "actions",
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const budget = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => store.dispatch(deleteData(budget.id))}>
              Delete <Trash2 className="text-red-600 h-5 w-5" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];
