import { useState } from "react";
import MovieCard from "../components/MovieCard";
import data from "../data.json";
import Search from "./../components/utils/Search";

export default function Home() {
  const movies = data.movies;
  const [query, setQuery] = useState("");

  return (
    <>
      <Search query={query} setQuery={setQuery} />
      <div className="flex justify-center items-center">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().includes(query) && (
              <MovieCard key={movie.id} movie={movie} />
            )
        )}
      </div>
    </>
  );
}
