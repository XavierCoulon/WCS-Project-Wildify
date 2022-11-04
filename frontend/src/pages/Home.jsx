import Player from "@components/Player";
import TrackList from "@components/TrackList";
import React from "react";
import PropTypes from "prop-types";

function Home({ tracks, currentId, handleCurrentId }) {
  return (
    <div className="bg-slate-800 w-full h-full text-white">
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
};
