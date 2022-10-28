import PropTypes from "prop-types";
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useState } from "react";

function Player({ tracks, currentId }) {
  const [playerState, setPlayerState] = useState({
    currentIndex: 0,
    trackList: tracks,
  });

  useEffect(() => {
    const newIndex = tracks.findIndex((e) => e.id === currentId);

    setPlayerState((state) => ({
      ...state,
      currentIndex: newIndex,
    }));
  }, [currentId]);

  return (
    <div className="w-full h-96">
      <audio
        autoPlay
        src={playerState.trackList[playerState.currentIndex].link}
        controls
      />
    </div>
  );
}

export default Player;

Player.propTypes = {
  currentId: PropTypes.string.isRequired,
  tracks: PropTypes.arrayOf.isRequired,
  findIndex: PropTypes.func.isRequired,
};
