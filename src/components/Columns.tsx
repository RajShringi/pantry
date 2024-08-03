"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { useItem } from "@/context/ItemContext";
import UpdateItem from "./UpdateItem";
import { useState } from "react";
import EditForm from "./EditForm";

export type Item = {
  id: string;
  name: string;
  quantity: string;
};

export const columns: ColumnDef<Item>[] = [
  {
    accessorKey: "name",
    header: "Item",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { deleteItemFromPantry } = useItem();
      const [isEditOpen, setIsEditOpen] = useState(false);
      return (
        <>
          <UpdateItem isOpen={isEditOpen} setIsOpen={setIsEditOpen}>
            <EditForm itemId={row.original.id} setIsOpen={setIsEditOpen} />
          </UpdateItem>
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

              <DropdownMenuItem>
                <button
                  className="w-full justify-start flex rounded-md transition-all duration-75 hover:bg-neutral-100"
                  onClick={() => {
                    setIsEditOpen(true);
                  }}
                >
                  Update Item
                </button>
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => deleteItemFromPantry(row.original.id)}
                className="text-red-400"
              >
                Delete Item
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      );
    },
  },
];
