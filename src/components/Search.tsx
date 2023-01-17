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
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Kullanıcı Adı Gir"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch size={22} />
        </button>
      </div>
    </div>
  );
};

export default Search;
