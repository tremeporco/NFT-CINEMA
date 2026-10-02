import CardList from "@/components/CardList";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-bold text-white">
          Movie Collection
        </h1>

        <CardList />
      </div>
    </main>
  );
}