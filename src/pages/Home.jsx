import { useState } from "react";
import Search from "../components/utils/Search";
import { COUNTRIES } from "../data/data";
import { CLUBS } from "../data/data";
import { PLAYERS } from "../data/data";
import CountryCard from "../components/CountryCard";
import ClubCard from "../components/ClubCard";
import PlayerCard from "../components/PlayerCard";

export default function Home() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Search search={search} handleSearchUpdate={setSearch} />
      <div className="flex flex-wrap justify-center items-center">
        {COUNTRIES.filter((country) =>
          country.name.toLowerCase().includes(search.toLowerCase())
        )
          .sort((a, b) => b.id - a.id)
          .map((country, index) => (
            <CountryCard key={index} country={country} />
          ))}
        {CLUBS.filter((club) =>
          club.name.toLowerCase().includes(search.toLowerCase())
        )
          .sort((a, b) => b.id - a.id)
          .map((club, index) => (
            <ClubCard key={index} club={club} />
          ))}
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
