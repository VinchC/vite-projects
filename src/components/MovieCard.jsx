import { useState } from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-between items-center m-[4rem]">
        <div className="flex flex-col items-center">
          <img
            className="max-w-3xs"
            src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="mt-4">
            <button
              className="favorite-btn"
              onClick={() => setFavorite(favorite ? false : true)}
            >
              {favorite ? "Hop !" : "Bof !"}
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </h3>
          <p>{movie.release_date?.split("-")[0]}</p>
        </div>
      </div>
    </>
  );
}
