import React from "react";
import SearchButton from "./SearchButton";
import SearchFormReset from "./SearchFormReset";

const Search = ({
  search,
  handleSearchUpdate,
}: {
  search?: string;
  handleSearchUpdate?: any;
}) => {
  return (
    <div className="flex justify-center">
      <form action="" className="relative w-72 paragraph" id="search-form">
        <input
          type="search"
          name="search"
          placeholder="Rechercher"
          aria-label="cherche du contenu dans le titre ou le texte d'un article ou d'un journal"
          className="bg-white h-8 px-5 pr-10 w-full rounded-full text-black focus:outline-none"
          onChange={(event) => handleSearchUpdate(event.target.value)}
        />
        {search && <SearchFormReset />}
      </form>
    </div>
  );
};

export default Search;
