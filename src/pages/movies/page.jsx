import MovieCard from "../../components/MovieCard";
import { useParams } from "react-router";

import data from "../../data.json";

export default function MoviePage() {
  const { id } = useParams();
  console.log(data.movies);
  let movie = data.movies.filter((movie) => movie.id === id)[0];
  return <MovieCard movie={movie} />;
}
