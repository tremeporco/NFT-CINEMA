export default function NFTCard() {
  return (
    <article
      className="
        group
        w-full max-w-sm
        overflow-hidden
        rounded-2xl
        bg-[#14253d]
        p-5
        shadow-lg
        transition-all
        duration-300
        ease-out
        hover:-translate-y-2
        hover:scale-[1.02]
        hover:shadow-2xl
      "
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src="/images/filme1.jpg"
          alt="Equilibrium NFT"
          className="
            aspect-square
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      <div className="mt-5">
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
          Equilibrium #3429
        </h2>

        <p className="mt-3 text-sm leading-6 text-[#8bacd9]">
          Our Equilibrium collection promotes balance and calm.
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="font-bold text-cyan-300">
            ♦ 0.041 ETH
          </span>

          <span className="text-sm text-[#8bacd9]">
            ◷ 3 days left
          </span>
        </div>

        <div className="my-5 h-px bg-[#2f415b]" />

        <div className="flex items-center gap-3">
          <img
            src="/avatar/image-avatar.png"
            alt="Jules Wyvern"
            className="h-9 w-9 rounded-full border border-white"
          />

          <p className="text-sm text-[#8bacd9]">
            Creation of{" "}
            <span className="text-white transition-colors duration-300 group-hover:text-cyan-300">
              Jules Wyvern
            </span>
          </p>
        </div>
      </div>
    </article>
  );
}