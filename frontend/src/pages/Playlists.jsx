import React from "react";
import PlaylistsList from "../components/PlaylistsList";

function Playlists({ handleCurrentId }) {
  return (
    <div className="bg-pinkCustom dark:bg-blackCustom w-full h-screen text-black dark:text-white pb-24">
      <PlaylistsList handleCurrentId={handleCurrentId} />
    </div>
  );
}

export default Playlists;
