import { useState } from "react";

export default function MovieCard({ movie }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <>
      <div className="movie-card">
        <div className="movie-poster">
          <img src={movie.url} alt={movie.title} />
          <div className="movie-overlay">
            <button
              className="favorite-btn"
              onClick={() => setFavorite(favorite ? false : true)}
            >
              {favorite ? "Hop !" : "Bof !"}
            </button>
          </div>
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
        </div>
      </div>
    </>
  );
}
