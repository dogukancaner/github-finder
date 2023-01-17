import { useState } from "react";
import Search from "../components/Search";

import { UserProps } from "../types/user";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (username: string) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    const { avatar_url, login, location, followers, following } = data;
    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };
    setUser(userData);
  };

  return (
    <div className="">
      <Search loadUser={loadUser} />
      {user && <p className="text-center mt-4">{user.login}</p>}
    </div>
  );
};

export default Home;
