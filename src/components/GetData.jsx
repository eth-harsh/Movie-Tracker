import { useEffect } from "react";

const KEY = "575010f9";

export default function GetData({ setMovies, query, setIsLoading, setError }) {
  useEffect(
    function () {
      if (!query) return;

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          const response = await fetch(
            `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          );

          if (!response.ok) {
            throw new Error("Something Went Wrong...");
          }

          const data = await response.json();

          if (data.Response === "False") {
            throw new Error("Movie Not Found...");
          }

          console.log(data);

          setMovies(data.Search || []);
        } catch (err) {
          console.error(err.message);
          setError(err.message);
          setMovies([]);
        } finally {
          setIsLoading(false);
        }
      }

      fetchMovies();
    },
    [query],
  );
}
