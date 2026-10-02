import Header from "@/components/Header";
import CardList from "@/components/CardList";
import CardList2 from "@/components/CardList2"; 

export default function Home() {
  return (
    <>
      <Header />
      <section className="mt-12 flex flex-col gap-12">
        
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold px-4 max-w-6xl mx-auto w-full">Filmes em Destaque</h2>
          <CardList />
        </div>

       
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold px-4 max-w-6xl mx-auto w-full">Novidades de 2026</h2>
          <CardList2 />
        </div>
      </section>
    </>
  );
}
