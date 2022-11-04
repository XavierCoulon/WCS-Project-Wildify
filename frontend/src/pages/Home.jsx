import Player from "@components/Player";
import TrackList from "@components/TrackList";
import React from "react";
import PropTypes from "prop-types";
import GenresList from "@components/GenresList";

function Home({ tracks, currentId, handleCurrentId, setCurrentPage, setGenreName }) {
  return (
<div className="bg-white dark:bg-slate-800 w-full h-full text-black dark:text-white">
      <p>Home</p>
      <p>Genres</p>

      <GenresList setCurrentPage={setCurrentPage} setGenreName={setGenreName} />
            <TrackList tracks={tracks} handleCurrentId={handleCurrentId} />
      {tracks.length && <Player currentId={currentId} tracks={tracks} />};
    </div>
  );
}

export default Home;

Home.propTypes = {

  tracks: PropTypes.arrayOf().isRequired,
  currentId: PropTypes.string.isRequired,
  handleCurrentId: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  setGenreName: PropTypes.func.isRequired,

};
