import { UserProps } from "../types/user";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
const User = ({
  login,
  avatar_url,
  followers,
  following,
  location,
}: UserProps) => {
  return (
    <div className="text-center p-4">
      <div className=" border border-gray-500 rounded-2xl p-4 ">
        <img className="rounded-2xl w-96 h-96" src={avatar_url} alt={login} />
        <h2 className="mt-2 text-lg font-medium">Kullanıcı Adı: {login}</h2>
      </div>
      <div className="border border-gray-500 rounded-lg mt-4 p-4 text-lg font-medium">
        {location && (
          <div className="flex items-center justify-center gap-2 mt-4 ">
            <MdLocationPin size={22} />
            <span>{location}</span>
          </div>
        )}
        <div className="flex gap-4 justify-center mt-4">
          <div className="flex justify-center gap-2">
            <p>Takipçi: </p>
            <p>{followers}</p>
          </div>
          <div className="flex justify-center gap-2">
            <p>Takip Edilen: </p>
            <p>{following}</p>
          </div>
        </div>
        <div className="mt-4">
          <Link to={`/repos/${login}`}>Repo Listesi</Link>
        </div>
      </div>
    </div>
  );
};

export default User;
