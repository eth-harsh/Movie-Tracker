export default function Form({ query, setQuery }) {
  return (
    <div className="mx-auto my-10 flex w-full max-w-3xl flex-col px-2 text-center text-white sm:my-14 sm:px-0 md:my-16">
      {/* Heading */}
      <span className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        Search <span className="text-orange-500">Movies</span>
      </span>

      <p className="mb-6 text-sm text-zinc-500 sm:mb-8 sm:text-base">
        Find your next movie to watch
      </p>

      {/* Search box */}
      <form className="flex w-full items-center gap-1.5 rounded-2xl border border-white/10 bg-zinc-900/80 p-1.5 shadow-xl backdrop-blur-md sm:gap-2 sm:p-2">
        <span className="hidden pl-3 text-sm text-zinc-500 sm:block">
          Movie
        </span>

        <input
          className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm text-white outline-none placeholder:text-zinc-600 sm:px-3 sm:text-base"
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          type="submit"
          className="shrink-0 rounded-xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/20 active:scale-95 sm:px-5"
        >
          Search
        </button>
      </form>
    </div>
  );
}
