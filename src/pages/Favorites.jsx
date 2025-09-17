import PlayerCard from "../components/PlayerCard";
import { usePlayerContext } from "./../contexts/PlayerContext";

function Favorites() {
  const { favorites } = usePlayerContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h1 className="text-center">Your Favorites</h1>
        <div className="flex flex-wrap justify-center items-centerd">
          {favorites.map((player) => (
            <PlayerCard player={player} key={player.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No favorite players Yet</h2>
      <p>Start adding players to your favorites and they will appear here!</p>
    </div>
  );
}

export default Favorites;
