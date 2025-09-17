"use client";

import { X } from "lucide-react";
import { Link } from "react-router-dom";

const SearchFormReset = () => {
  const reset2 = () => {
    const form = document.getElementById("search-form") as HTMLFormElement;

    if (form) form.reset();
  };

  return (
    <>
      <button
        type="reset"
        onClick={reset2}
        className="absolute right-0 mr-4 mt-1 bg-white"
      >
        <Link to="" className="size-8 text-red-800 bg-white">
          X
        </Link>
      </button>
    </>
  );
};

export default SearchFormReset;
