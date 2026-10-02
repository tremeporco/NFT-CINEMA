export default function Header() {
  return (
    <header className="border-b border-slate-700 bg-[#0d192b]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400">
          <img
  src="/images/logo.png"
  alt="Movie Collection"
  className="h-10 w-10 object-contain"
/>
          </div>

          <span className="text-xl font-bold text-white">
            Movie Collection
          </span>
        </div>

        <nav className="hidden items-center gap-8 sm:flex">
          <a
            href=""
            className="text-sm font-medium text-white transition-colors hover:text-cyan-300"
          >
            Início
          </a>

          <a
            href="filmes"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300"
          >
            Filmes
          </a>

          <a
            href="#categorias"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300"
          >
            Categorias
          </a>
        </nav>

        <button
          className="text-2xl text-white sm:hidden"
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}