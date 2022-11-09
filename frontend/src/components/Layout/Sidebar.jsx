/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-1/5 min-w-[150px] px-10 h-screen flex flex-col justify-start align-middle items-center text-zinc-900 dark:text-white bg-slate-500 dark:bg-grayCustom">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favourites">Favorites</Link>
        </li>
        <li>
          <Link to="/playlists">Playlists</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/uploads">Uploads</Link>
        </li>
        <li>
          <Link to="/genres">Genres</Link>
        </li>
      </ul>
    </div>
  );
}
