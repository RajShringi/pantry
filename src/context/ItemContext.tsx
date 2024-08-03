"use client";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { db } from "../../firebase";

type ItemType = {
  id: string;
  name: string;
  quantity: string;
};

type ItemContextType = {
  items: ItemType[];
  addItemToPantry: (item: { name: string; quantity: string }) => void;
  updatePantry: (item: ItemType) => void;
  deleteItemFromPantry: (id: string) => void;
};

const ItemProviderContext = createContext<ItemContextType | undefined>(
  undefined
);

async function getPantryItems() {
  const querySnapshot = await getDocs(collection(db, "items"));
  let itemsArr: ItemType[] = [];
  querySnapshot.forEach((doc) => {
    itemsArr.push({
      id: doc.id,
      name: doc.data().name,
      quantity: doc.data().quantity,
    });
    //   setItems(itemsArr);
  });
  return itemsArr;
}

export function ItemProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ItemType[]>([]);

  useEffect(() => {
    const setPantryItems = async () => {
      const i = await getPantryItems();
      setItems(i);
    };
    setPantryItems();
  }, []);

  const addItemToPantry = async (item: { name: string; quantity: string }) => {
    await addDoc(collection(db, "items"), { ...item });
    const i = await getPantryItems();
    setItems(i);
  };
  const updatePantry = async (item: ItemType) => {
    await setDoc(doc(db, "items", item.id), {
      ...item,
      name: item.name,
      quantity: item.quantity,
    });
    const index = items.findIndex((it) => it.id === item.id);
    if (index !== -1) {
      setItems((prev) => {
        // Create a copy of the previous state
        const newItems = [...prev];

        // Update the item in the new state
        newItems[index] = {
          ...newItems[index],
          name: item.name,
          quantity: item.quantity,
        };

        // Return the new state
        return newItems;
      });
    }
  };

  const deleteItemFromPantry = async (id: string) => {
    await deleteDoc(doc(db, "items", id));
    setItems((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <ItemProviderContext.Provider
      value={{ items, addItemToPantry, updatePantry, deleteItemFromPantry }}
    >
      {children}
    </ItemProviderContext.Provider>
  );
}

export const useItem = () => {
  const context = useContext(ItemProviderContext);
  if (context === undefined)
    throw new Error("useItem must be used within ItemProvider");
  return context;
};
