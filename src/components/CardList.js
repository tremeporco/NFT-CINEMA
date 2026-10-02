import "animate.css";
import NFTCard from "./NFTCard";

const movies = [
  {
    id: 1,
    title: "Interestelar",
    image: "/images/filme1.jpg",
    description:
      "Uma viagem pelo espaço em busca de um novo lar para a humanidade.",
    genre: "Ficção científica",
    year: 2014,
  },
  {
    id: 2,
    title: "Batman",
    image: "/images/filme2.jpg",
    description:
      "O vigilante de Gotham enfrenta uma nova ameaça enquanto busca justiça.",
    genre: "Ação",
    year: 2022,
  },
  {
    id: 3,
    title: "Duna",
    image: "/images/filme3.jpg",
    description:
      "Uma jornada épica por um planeta envolvido em conflitos e intrigas.",
    genre: "Ficção científica",
    year: 2021,
  },
  {
    id: 4,
    title: "Avatar",
    image: "/images/filme4.jpg",
    description:
      "Uma aventura pelo incrível mundo de Pandora e seus habitantes.",
    genre: "Aventura",
    year: 2009,
  },
];

export default function CardList() {
  return (
<section
  className="
    mx-auto
    grid
    w-full
    max-w-[300px]
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