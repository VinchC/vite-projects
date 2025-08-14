import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Search from "./../components/utils/Search";
import { getPopularMovies, searchMovies } from "./../services/api";

export default function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Error occured while loading data...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  return (
    <>
      <Search query={query} setQuery={setQuery} />
      <div className="flex flex-wrap justify-center items-center">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
