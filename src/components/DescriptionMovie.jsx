import { useEffect, useState } from "react";

const KEY = "575010f9";

export default function DescriptionMovie({ selectedID }) {
  const [movie, setMovie] = useState({});

  useEffect(
    function () {
      async function getDescription() {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedID}`,
        );

        const data = await response.json();

        console.log(data);

        setMovie(data);
      }

      getDescription();
    },
    [selectedID],
  );

  return <MovieItem movie={movie} />;
}

function MovieItem({ movie }) {
  return (
    <div className="flex flex-col gap-6 text-white">
      {/* Poster + Main Info */}
      <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start">
        <div className="h-52 w-36 shrink-0 overflow-hidden rounded-xl border border-white/10 shadow-xl shadow-black/40">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-3 text-center sm:text-left">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
              Movie Details
            </p>

            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {movie.Title}
            </h2>

            <p className="mt-2 text-sm text-zinc-400">
              {movie.Year} • {movie.Runtime} • {movie.Genre}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-2 sm:justify-start">
            <span className="text-lg text-yellow-400">★</span>

            <span className="text-lg font-bold">{movie.imdbRating}</span>

            <span className="text-sm text-zinc-500">/ 10 IMDb</span>
          </div>
        </div>
      </div>

      {/* Plot */}
      <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-orange-400">
          Plot
        </h3>

        <p className="text-sm leading-7 text-zinc-300">{movie.Plot}</p>
      </div>

      {/* Movie Information */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <InfoItem label="Released" value={movie.Released} />
        <InfoItem label="Runtime" value={movie.Runtime} />
        <InfoItem label="Genre" value={movie.Genre} />
        <InfoItem label="Actors" value={movie.Actors} />
        <InfoItem label="Director" value={movie.Director} />
        <InfoItem label="Writer" value={movie.Writer} />
      </div>

      {/* Awards */}
      <div className="rounded-xl border border-white/10 bg-gradient-to-r from-orange-500/10 to-transparent p-4">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-orange-400">
          Awards
        </p>

        <p className="text-sm leading-6 text-zinc-300">{movie.Awards}</p>
      </div>
    </div>
  );
}

function InfoItem({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
      <p className="mb-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
        {label}
      </p>

      <p className="text-sm leading-6 text-zinc-200">{value || "N/A"}</p>
    </div>
  );
}
