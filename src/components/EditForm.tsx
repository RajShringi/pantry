"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useItem } from "@/context/ItemContext";
import { Button } from "./ui/button";

export default function EditForm({
  itemId,
  setIsOpen,
}: {
  itemId: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { items, updatePantry } = useItem();
  // const item = items.find((item) => item.id === itemId);
  // console.log(item);
  const [item, setItem] = useState(
    items.find((item) => item.id === itemId) || {
      id: "",
      name: "",
      quantity: "",
    }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updatePantry(item);
    setIsOpen(false);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Name
        </Label>
        <Input
          id="name"
          value={item?.name}
          className="col-span-3"
          onChange={(e) =>
            setItem((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="quantity" className="text-right">
          Quantity
        </Label>
        <Input
          id="quantity"
          value={item?.quantity}
          className="col-span-3"
          onChange={(e) =>
            setItem((prev) => ({ ...prev, quantity: e.target.value }))
          }
        />
      </div>
      <Button type="submit" variant="default">
        Save changes
      </Button>
    </form>
  );
}
