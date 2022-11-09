import React from "react";
import PlaylistsList from "../components/PlaylistsList";

function Playlists() {
  return (
    <div className="bg-white dark:bg-slate-800 w-full h-full text-black dark:text-white">
      <PlaylistsList />
    </div>
  );
}

export default Playlists;
