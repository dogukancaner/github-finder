type SearchProps = {
  loadUser: (username: string) => Promise<void>;
};
import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center items-center gap-2">
        <input
          className="border w-96 border-gray-600 rounded-md p-3"
          type="text"
          placeholder="Kullanıcı Adı Gir"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="border p-3 border-gray-500 rounded-full"
          onClick={() => loadUser(userName)}
        >
          <BsSearch size={22} />
        </button>
      </div>
    </div>
  );
};

export default Search;
