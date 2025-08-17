import MovieCard from "../../components/MovieCard";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getPopularMovies } from "./../../services/api";

export default function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const popularMovies = await getPopularMovies();
        let chosenMovie = popularMovies.filter((movie) => movie.id == id)[0];
        setMovie(chosenMovie);
      } catch (err) {
        console.log(err);
        setError("Error occured while loading data...");
      } finally {
        setLoading(false);
      }
    };
    loadMovie();
  }, [id]);

  return (
    <>
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <MovieCard movie={movie} />
      )}
    </>
  );
}
