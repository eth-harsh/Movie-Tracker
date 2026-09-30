import { useState } from "react";
import Form from "./components/Form";
import GetData from "./components/GetData";
import Header from "./components/Header";
import { Skiper52 } from "./components/Skiper52";
import MovieBox from "./components/MovieBox";
import DescriptionMovie from "./components/DescriptionMovie";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedID, setSelectedID] = useState(null);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-[#0a0a0a] bg-[radial-gradient(circle_at_top,#3b0764_0%,#171717_35%,#0a0a0a_75%)]">
      <Header />

      <Skiper52 />

      <main className="w-full px-4 py-6 sm:px-6 md:px-8 lg:px-10">
        <Form query={query} setQuery={setQuery} />

        <GetData
          query={query}
          setMovies={setMovies}
          setIsLoading={setIsLoading}
          setError={setError}
        />

        <MovieBox
          DescriptionMovie={DescriptionMovie}
          movies={movies}
          query={query}
          isLoading={isLoading}
          error={error}
          setSelectedID={setSelectedID}
          selectedID={selectedID}
        />
      </main>
    </div>
  );
}
