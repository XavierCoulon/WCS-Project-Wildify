/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import FavouriteIcon from "@components/SVG/Favourite";
import HomeIcon from "@components/SVG/HomeIcon";
import PlaylistsIcon from "../SVG/PlaylistsIcon";
import ProfileIcon from "../SVG/ProfileIcon";
import UploadsIcon from "../SVG/UploadsIcon";
import GenreIcon from "../SVG/GenreIcon";

function CustomNavLink({ path, name, children }) {
  const activeStyle = {
    color: "yellow",
  };

  return (
    <NavLink
      className=" w-full flex justify-around align-middle items-center border-gray-400 py-2"
      to={path}
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      {children}
      <p className="w-[50%] text-right">{name}</p>
    </NavLink>
  );
}

export default function Sidebar() {
  return (
    <div className=" min-w-[200px] left-0 max-w-[200px] fixed  z-50 px-4 h-screen flex flex-col justify-start align-middle items-center text-zinc-900 dark:text-white bg-slate-500 dark:bg-grayCustom">
      <ul className="w-full">
        <li className="border-b w-full border-gray-400 pt-12 pb-4">
          <CustomNavLink name="Home" path="/">
            <HomeIcon currentPage="/" />
          </CustomNavLink>
        </li>
        <li className="border-b w-full border-gray-400 py-4">
          <CustomNavLink name="Favourites" path="/favourites">
            <FavouriteIcon currentPage="/favourites" />
          </CustomNavLink>
        </li>
        <li className="border-b w-full border-gray-400 py-4">
          <CustomNavLink name="Playlists" path="/playlists">
            <PlaylistsIcon currentPage="/playlists" />
          </CustomNavLink>
        </li>
        <li className="border-b w-full border-gray-400 py-4">
          <CustomNavLink name="Profile" path="/profile">
            <ProfileIcon currentPage="/profile" />
          </CustomNavLink>
        </li>
        <li className="border-b w-full border-gray-400 py-4">
          <CustomNavLink name="Uploads" path="/uploads">
            <UploadsIcon currentPage="/uploads" />
          </CustomNavLink>
        </li>
        <li className="py-4 w-full">
          <CustomNavLink name="Genres" path="/genres">
            <GenreIcon currentPage="/genres" />
          </CustomNavLink>
        </li>
      </ul>
    </div>
  );
}
CustomNavLink.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
