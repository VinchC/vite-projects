import MovieCard from "../components/MovieCard";
import data from "../data.json";

export default function Home() {
  return (
    <>
      <div className="movie-container">
        {data.movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
