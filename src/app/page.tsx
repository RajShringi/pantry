import AddItem from "@/components/AddItem";
import Table from "@/components/Table";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col sm:flex-row items-center justify-center mx-auto gap-6 p-24 max-w-[500px]">
      <div>
        <h2 className="text-center py-2 text-lg font-bold tracking-widest">
          Pantry Tracker
        </h2>
        <AddItem />
        <Table />
      </div>
    </main>
  );
}
