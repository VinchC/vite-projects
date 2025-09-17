import { Link } from "react-router-dom";
// import { useMovieContext } from "../contexts/MovieContext";

export default function PlayerCard({ player }) {
  // const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  // const favorite = isFavorite(player.id);

  // function onFavoriteClick(e) {
  //   e.preventDefault();
  //   if (favorite) removeFromFavorites(player.id);
  //   else addToFavorites(player);
  // }

  return (
    <>
      <div className="flex flex-col justify-between items-center m-[4rem]">
        <div className="flex flex-col items-center">
          <img
            className="max-w-3xs"
            src={player.picture}
            alt={player.full_name}
          />
          {/* <div className="mt-4">
            <button className="favorite-btn" onClick={onFavoriteClick}>
              {favorite ? "Hop !" : "Bof !"}
            </button>
          </div> */}
        </div>
        <div className="flex flex-col items-center">
          <h3>
            <Link to={`/players/${player.id}`}>{player.full_name}</Link>
          </h3>
          <p>{player.description}</p>
        </div>
      </div>
    </>
  );
}
