import AddItem from "@/components/AddItem";
import Table from "@/components/Table";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center mx-auto gap-6 p-24 max-w-[500px]">
      <AddItem />
      <Table />
    </main>
  );
}
