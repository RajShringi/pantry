"use client";
import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { db } from "../../firebase";
import { useItem } from "@/context/ItemContext";

export default function AddItem() {
  const { addItemToPantry } = useItem();

  const [item, setItem] = useState({
    name: "",
    quantity: "",
  });

  const addItem = async (e: FormEvent) => {
    e.preventDefault();
    if (item.name !== "" && item.quantity !== "") {
      addItemToPantry({
        name: item.name.trim(),
        quantity: item.quantity.trim(),
      });
    }
    setItem({ name: "", quantity: "" });
  };

  return (
    <div className="ring-1 ring-[#e2e8f0] p-4 rounded-lg w-full">
      <form onSubmit={addItem} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm">
            Item Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Item Name"
            value={item.name}
            onChange={(e) =>
              setItem((prev) => ({ ...prev, name: e.target.value }))
            }
            className="border border-[#e2e8f0] p-2 rounded-lg text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="quantity" className="text-sm">
            Quantity
          </label>
          <input
            id="quantity"
            type="text"
            name="quantity"
            placeholder="quantity"
            value={item.quantity}
            onChange={(e) =>
              setItem((prev) => ({ ...prev, quantity: e.target.value.trim() }))
            }
            className="border border-[#e2e8f0] p-2 rounded-lg text-sm"
          />
        </div>
        <Button type="submit">Add Item</Button>
      </form>
    </div>
  );
}
