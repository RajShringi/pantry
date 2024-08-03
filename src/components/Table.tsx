"use client";
import { DataTable } from "./Data-Table";
import { columns } from "./Columns";
import { useItem } from "@/context/ItemContext";

type Item = {
  id: string;
  name: string;
  quantity: string;
};

export default function Table() {
  const { items } = useItem();

  return (
    <div className="w-full">
      <DataTable columns={columns} data={items} />
    </div>
  );
}
