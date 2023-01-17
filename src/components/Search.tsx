type SearchProps = {
  loadUser: (username: string) => Promise<void>;
};
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1>Kullanıcı Adını Gir:</h1>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Kullanıcı Adı Gir"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch size={22} />
        </button>
      </div>
    </div>
  );
};

export default Search;
