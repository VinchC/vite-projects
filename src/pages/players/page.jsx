import { useParams } from "react-router";
import PlayerCard from "../../components/PlayerCard";
import { PLAYERS } from "../../data/data";

export default function PlayerPage() {
  const { id } = useParams();
  const playerToDisplay = PLAYERS.filter((player) => player.id == id)[0];

  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        <PlayerCard player={playerToDisplay} />
      </div>
    </>
  );
}
