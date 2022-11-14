import React from "react";
import PropTypes from "prop-types";
import PlaylistsList from "../components/PlaylistsList";

function Playlists({ handleCurrentId }) {
  return (
    <div className="bg-white dark:bg-slate-800 w-full h-full text-black dark:text-white">
      <PlaylistsList handleCurrentId={handleCurrentId} />
    </div>
  );
}

export default Playlists;

Playlists.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
