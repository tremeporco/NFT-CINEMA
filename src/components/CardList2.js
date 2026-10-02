import "animate.css";
import NFTCard from "./NFTCard";

const movies = [
 {
  id: 5,
  title: "Echoes of the Kingdom ",
  image: "/images/filme 5.jpg",
  description:
    "O despertar de dragões ancestrais sobre uma cidade dourada força uma jovem rainha a confrontar o passado do seu reino para protegê-lo de uma nova era de magia.",
  genre: " Fantasia",
  year: 2026,
},
{
  id: 6,
  title: " Glitch in Time ",
  image: "/images/filme6.jpg",
  description:
    "A realidade se divide em falhas digitais e dimensões dobráveis, forçando um homem a navegar pelas fraturas do multiverso para salvar o próprio tempo..",
  genre: "Ficção científica",
  year: 2026,
},
{
  id: 7,
  title: "Chrono Case",
  image: "/images/filme7.jpg",
  description:
    "Misturando o estilo Noir com tecnologia cyberpunk, um detetive investiga um crime impossível reconstituindo cenas através de memórias holográficas.",
  genre: "Suspense",
  year: 2026,
},
{
  id: 8,
  title: " The Deepest Dark",
  image: "/images/filme8.jpg",
  description:
    "Presa nas profundezas abissais do oceano, a tripulação de um submarino enfrenta o terror absoluto quando uma criatura ancestral e gigantesca desperta na escuridão.",
  genre: "Terror",
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
        max-w-6xl
        grid-cols-1
        gap-6
        sm:grid-cols-2
        lg:grid-cols-4
        px-4
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
