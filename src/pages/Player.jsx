import PlayerCard from "../components/PlayerCard";
import { PLAYERS } from "../data/data";

export default function Player() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        {PLAYERS &&
          PLAYERS.length &&
          PLAYERS.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
      </div>
    </>
  );
}
