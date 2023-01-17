import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div className="flex gap-2">
      <input type="text" placeholder="Kullanıcı Adı Gir" />
      <button>
        <BsSearch />
      </button>
    </div>
  );
};

export default Search;
