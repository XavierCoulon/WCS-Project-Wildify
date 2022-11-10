/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import FavouriteIcon from "@components/SVG/Favourite";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-1/5 min-w-[150px] px-10 h-screen flex flex-col justify-start align-middle items-center text-zinc-900 dark:text-white bg-slate-500 dark:bg-grayCustom m-0">
      <ul>
        <li className="border-b border-gray-400 py-4">
          <Link className="flex" to="/">
            <FavouriteIcon />
            Home
          </Link>
        </li>
        <li className="border-b border-gray-400 py-4">
          <Link className="flex justify-between align-middle" to="/favourites">
            <FavouriteIcon />
            Favorites
          </Link>
        </li>
        <li className="border-b border-gray-400 py-4">
          <Link className="flex" to="/playlists">
            <FavouriteIcon />
            Playlists
          </Link>
        </li>
        <li className="border-b border-gray-400 py-4">
          <Link className="flex" to="/profile">
            <FavouriteIcon />
            Profile
          </Link>
        </li>
        <li className="border-b border-gray-400 py-4">
          <Link className="flex" to="/uploads">
            <FavouriteIcon />
            Uploads
          </Link>
        </li>
        <li className="py-4">
          <Link className="flex" to="/genres">
            <FavouriteIcon />
            Genres
          </Link>
        </li>
      </ul>
    </div>
  );
}
