import { useState } from "react";
import Search from "../components/utils/Search";
import ClubCard from "../components/ClubCard";
import { CLUBS } from "../data/data";

export default function Club() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Search search={search} handleSearchUpdate={setSearch} />
      <div className="flex flex-wrap justify-center items-center">
        {CLUBS.filter((club) =>
          club.name.toLowerCase().includes(search.toLowerCase())
        )
          .sort((a, b) => b.id - a.id)
          .map((club, index) => (
            <ClubCard key={index} club={club} />
          ))}
      </div>
    </>
  );
}
