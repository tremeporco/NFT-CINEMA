export default function NFTCard({
  title,
  image,
  description,
  genre,
  year,
}) {
  return (
    <article
      className="
        group
        flex
        h-full
        w-full
        max-w-sm
        flex-col
        overflow-hidden
        rounded-2xl
        bg-[#14253d]
        p-5
        shadow-lg
        transition-all
        duration-300
        ease-out
        hover:-translate-y-2
        hover:scale-[1.03]
        hover:shadow-2xl
      "
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="
            aspect-4/5
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <h2
          className="
            text-xl
            font-bold
            text-white
            transition-colors
            duration-300
            group-hover:text-cyan-300
          "
        >
          {title}
        </h2>

        <p className="mt-3 text-sm leading-6 text-[#8bacd9]">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="font-bold text-cyan-300">
            {genre}
          </span>

          <span className="text-sm text-[#8bacd9]">
            {year}
          </span>
        </div>
      </div>
    </article>
  );
}