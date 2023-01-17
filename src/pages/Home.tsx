import { useState } from "react";
import Search from "../components/Search";

import { UserProps } from "../types/user";

const Home = () => {
  const [user, setUser] = useState(null);
  return (
    <div>
      <Search />
    </div>
  );
};

export default Home;
