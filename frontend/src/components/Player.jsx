import PropTypes from "prop-types";
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef, useState } from "react";
import AudioControl from "./Player/AudioControl";

function Player({ tracks, currentId }) {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Refs
  const audioRef = useRef(new Audio(tracks[trackIndex].link));
  const intervalRef = useRef();

  const { duration } = audioRef.current;

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  const startTimer = () => {
    // On efface les timers en cours
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onScrub = (value) => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    if (isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(tracks[trackIndex].link);
    setTrackProgress(audioRef.current.currentTime);

    if (isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    }
  }, [trackIndex]);

  useEffect(() => {
    const newIndex = tracks.findIndex((e) => e.id === currentId);

    setTrackIndex(newIndex);
  }, [currentId]);

  const roundedTime = (time) => {
    const result = [];
    const splitedTime = time.split(":");
    const minSec = Math.round(+splitedTime[1] * 100) / 100;
    result.push(splitedTime[0], minSec.toString().padStart(5, "0"));
    return result.join(":");
  };

  const handlePLay = () => {
    setIsPlaying((state) => !state);
  };

  return (
    <div className="w-full h-200 bg-gray flex flex-row justify-around bottom-0 fixed">
      <div className="flex flex-row space-x-10 justify-self-auto w-full p-16">
        <div className="w-1/9">
          <img
            src={tracks[trackIndex].album.picture}
            alt="music"
            className="w-12 h-12"
          />
        </div>
        <div className="w-1/5 text-c">
          <h2>{tracks[trackIndex].title}</h2>
          <h3>From {tracks[trackIndex].artist.name}</h3>
        </div>
        <div className="w-1/8">
          <p>{audioRef.current.currentTime}</p>
        </div>
        <div className="w-2/6">
          <div className="flex justify-center">
            <AudioControl
              isPlaying={isPlaying}
              onPrevClick={toPrevTrack}
              onNextClick={toNextTrack}
              handleIsPlaying={handlePLay}
            />
          </div>
          <input
            type="range"
            value={trackProgress}
            step="1"
            min="0"
            max={duration}
            className="progess w-full"
            onChange={(e) => onScrub(e.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
          />
        </div>
        <div className="w-1/8">
          <p>{roundedTime(tracks[trackIndex].duration)}</p>
        </div>
      </div>
    </div>
  );
}

Player.propTypes = {
  currentId: PropTypes.string.isRequired,
  tracks: PropTypes.arrayOf.isRequired,
  findIndex: PropTypes.func.isRequired,
};

export default Player;

// import PropTypes from "prop-types";
// /* eslint-disable jsx-a11y/media-has-caption */
// import React, { useEffect, useState } from "react";

// function Player({ tracks, currentId }) {
//   const [playerState, setPlayerState] = useState({
//     currentIndex: 0,
//     trackList: tracks,
//   });

//   useEffect(() => {
//     const newIndex = tracks.findIndex((e) => e.id === currentId);

//     setPlayerState((state) => ({
//       ...state,
//       currentIndex: newIndex,
//     }));
//   }, [currentId]);

//   return (
//     <div className="w-full h-96">
//       <audio
//         className="w-full"
//         autoPlay
//         src={playerState.trackList[playerState.currentIndex].link}
//         controls
//       />
//     </div>
//   );
// }

// export default Player;

// Player.propTypes = {
//   currentId: PropTypes.string.isRequired,
//   tracks: PropTypes.arrayOf.isRequired,
//   findIndex: PropTypes.func.isRequired,
// };
