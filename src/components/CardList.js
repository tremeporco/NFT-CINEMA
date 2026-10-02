import "animate.css";
import NFTCard from "./NFTCard";

const movies = [
 {
  id: 1,
  title: "Neo-Frontier",
  image: "/images/filme1.jpg",
  description:
    "Uma missão espacial leva um grupo de exploradores a um planeta desconhecido, onde um novo futuro para a humanidade pode estar escondido.",
  genre: "Ficção científica",
  year: 2026,
},

{
  id: 2,
  title: "Green Cat",
  image: "/images/filme2.jpg",
  description:
    "Um gato verde, curioso e adorável, embarca em uma aventura inesperada para proteger sua pequena cidade e seus amigos.",
  genre: "Animação",
  year: 2026,
},

{
  id: 3,
  title: "The Silent Woods",
  image: "/images/filme3.jpg",
  description:
    "Ao entrar em uma floresta misteriosa onde nenhum som parece existir, uma jovem descobre segredos que deveriam permanecer escondidos.",
  genre: "Terror",
  year: 2026,
},

{
  id: 4,
  title: "Space Odyssey",
  image: "/images/filme4.jpg",
  description:
    "Uma jornada através das estrelas transforma uma simples missão espacial em uma descoberta que pode mudar para sempre a visão da humanidade sobre o universo.",
  genre: "Aventura",
  year: 2026,
},
]

export default function CardList() {
  return (
<section
  className="
    mx-auto
    grid
    w-full
    max-w-75
    grid-cols-1
    gap-6
    sm:max-w-none
    sm:grid-cols-2
    lg:grid-cols-4
  "
>
      {movies.map((movie, index) => (
        <div
          key={movie.id}
          className="animate__animated animate__fadeInUp"
          style={{
            animationDelay: `${index * 0.12}s`,
            animationDuration: "0.7s",
            animationFillMode: "both",
          }}
        >
          <NFTCard
            title={movie.title}
            image={movie.image}
            description={movie.description}
            genre={movie.genre}
            year={movie.year}
          />
        </div>
      ))}
    </section>
  );
}