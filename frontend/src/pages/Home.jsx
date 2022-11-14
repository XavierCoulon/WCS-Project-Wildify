import React from "react";
import PropTypes from "prop-types";
import TrackList from "../components/TrackList";
import GenresList from "../components/GenresList/index_original";

function Home({
  tracks,
  currentId,
  handleCurrentId,
  setGenreName,
  handlePLay,
  setIsPlaying,
  isPlaying,
}) {
  return (
    <div className="bg-white dark:bg-slate-800 w-full h-full text-black dark:text-white">
      <GenresList
        setGenreName={setGenreName}
        tracks={tracks}
        currentId={currentId}
        handleCurrentId={handleCurrentId}
        handlePLay={handlePLay}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
      />
      <TrackList
        tracks={tracks}
        currentId={currentId}
        handleCurrentId={handleCurrentId}
        handlePLay={handlePLay}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
      />
    </div>
  );
}

export default Home;

Home.propTypes = {
  tracks: PropTypes.arrayOf().isRequired,
  currentId: PropTypes.string.isRequired,
  handleCurrentId: PropTypes.func.isRequired,
  setGenreName: PropTypes.func.isRequired,
  handlePLay: PropTypes.func.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
