
export default function MovieBox({
  movies,
  isLoading,
  error,
  query,
  selectedID,
  setSelectedID,
  DescriptionMovie,
}) {
  return (
    <div className="mx-auto grid h-[600px] w-full max-w-5xl grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-zinc-900/80 p-4 shadow-2xl backdrop-blur-md sm:w-[90%] sm:gap-6 sm:p-5 md:grid-cols-[1fr_1.5fr] md:p-6">
      {/* Movie List */}
      <div className="flex h-full min-h-0 flex-col gap-3 overflow-y-auto pr-2">
        {!query ? (
          <p className="py-10 text-center text-2xl text-white">
            Start searching... 🔎
          </p>
        ) : (
          isLoading && (
            <p className="py-10 text-center text-white">Loading...</p>
          )
        )}

        {!isLoading &&
          !error &&
          movies.map((movie) => (
            <MovieItem
              setSelectedID={setSelectedID}
              key={movie.imdbID}
              movie={movie}
              selectedID={selectedID}
            />
          ))}

        {error && <p className="py-10 text-center text-red-400">{error}</p>}
      </div>

      {/* About Movie */}
      <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-xl bg-white/[0.03] p-5 sm:p-6">
        <div className="h-full min-h-0 overflow-y-auto pr-2">
          {selectedID ? (
            <DescriptionMovie selectedID={selectedID} />
          ) : (
            <DescriptionDefault />
          )}
        </div>
      </div>
    </div>
  );
}

function MovieItem({ movie, setSelectedID }) {
  return (
    <div
      onClick={() => setSelectedID(movie.imdbID)}
      className="group flex cursor-pointer gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/30 hover:bg-white/[0.07] sm:gap-4"
    >
      {/* Poster */}
      <div className="h-20 w-14 shrink-0 overflow-hidden rounded-lg sm:h-24 sm:w-16">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Movie Info */}
      <div className="flex min-w-0 flex-col justify-center">
        <h3 className="truncate text-sm font-semibold text-white sm:text-base">
          {movie.Title}
        </h3>

        <p className="mt-1 text-xs capitalize text-zinc-500 sm:text-sm">
          {movie.Type}
        </p>

        <p className="mt-2 text-xs text-zinc-400">🗓️ {movie.Year}</p>
      </div>
    </div>
  );
}

function DescriptionDefault() {
  return (
    <div>
      <span className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400 sm:tracking-[0.25em]">
        About the movie
      </span>

      <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">
        Discover something new
      </h2>

      <p className="max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
        Explore movies, discover new stories, and find something worth
        watching. Browse through the collection and pick your next movie.
      </p>
    </div>
  );
}
