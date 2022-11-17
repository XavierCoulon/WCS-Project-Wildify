import React from "react";
import PropTypes from "prop-types";
import PlaylistsList from "../components/PlaylistsList";

function Playlists({ handleCurrentId }) {
  return (
    <div className="bg-[#F3E8F3] dark:bg-slate-800 w-full h-screen text-black dark:text-white">
      <PlaylistsList handleCurrentId={handleCurrentId} />
    </div>
  );
}

export default Playlists;

Playlists.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
