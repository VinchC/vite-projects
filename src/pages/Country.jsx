import { useState } from "react";
import Search from "../components/utils/Search";
import CountryCard from "../components/CountryCard";
import { COUNTRIES } from "../data/data";

export default function Country() {
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
      </div>
    </>
  );
}
