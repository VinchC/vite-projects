import { useState } from "react";
import Search from "../components/utils/Search";
import PlayerCard from "../components/PlayerCard";
import { PLAYERS } from "../data/data";

export default function Player() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Search search={search} handleSearchUpdate={setSearch} />
      <div className="flex flex-wrap justify-center items-center">
        {PLAYERS.filter((player) =>
          player.full_name.toLowerCase().includes(search.toLowerCase())
        )
          .sort((a, b) => b.id - a.id)
          .map((player, index) => (
            <PlayerCard key={index} player={player} />
          ))}
      </div>
    </>
  );
}
