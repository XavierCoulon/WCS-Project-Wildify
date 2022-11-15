/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import FavouriteIcon from "@components/SVG/Favourite";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <div className=" min-w-[250px] max-w-[250px] md:relative z-30 h-full flex flex-col justify-start align-middle items-center text-zinc-900 dark:text-white bg-slate-500 dark:bg-grayCustom">
        <ul>
          <li className="border-b border-gray-400 pt-12 pb-8">
            <Link className="flex" to="/">
              <FavouriteIcon />
              Home
            </Link>
          </li>
          <li className="border-b border-gray-400 py-8">
            <Link
              className="flex justify-between align-middle"
              to="/favourites"
            >
              <FavouriteIcon />
              Favorites
            </Link>
          </li>
          <li className="border-b border-gray-400 py-8">
            <Link className="flex" to="/playlists">
              <FavouriteIcon /> Playlists
            </Link>
          </li>
          <li className="border-b border-gray-400 py-8">
            <Link className="flex" to="/profile">
              <FavouriteIcon />
              Profile
            </Link>
          </li>
          <li className="border-b border-gray-400 py-8">
            <Link className="flex" to="/uploads">
              <FavouriteIcon />
              Uploads
            </Link>
          </li>
          <li className="py-8">
            <Link className="flex" to="/genres">
              <FavouriteIcon />
              Genres
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
