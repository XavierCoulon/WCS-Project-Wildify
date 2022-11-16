import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import usePlayerContext from "../Context/PlayerContext";
import AudioControl from "./Player/AudioControl";

function Player({ currentId }) {
  const { tracksPlayer } = usePlayerContext();
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Refs
  const audioRef = useRef(null);
  const intervalRef = useRef();
  const isReady = useRef(false);

  const { duration } = audioRef.current || 0;

  useEffect(() => {
    const newIndex = tracksPlayer.findIndex((e) => e.id === currentId);
    setTrackIndex(newIndex);
  }, [currentId]);

  useEffect(() => {
    audioRef.current = new Audio(tracksPlayer[trackIndex].link);
  }, []);

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracksPlayer.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < tracksPlayer.length - 1) {
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
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
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
    audioRef.current = new Audio(tracksPlayer[trackIndex].link);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [trackIndex]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  function secondsToHms(audioTime) {
    const audioTime2 = Number(audioTime) || 0;
    const m = Math.floor((audioTime2 % 3600) / 60);
    const s = Math.floor((audioTime2 % 3600) % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  }

  if (
    audioRef.current === null ||
    tracksPlayer.length === 0 ||
    !tracksPlayer[trackIndex]
  )
    return "Loading ...";

  return (
    <div className="w-screen z-50  h-50 opacity-90 bg-gray flex flex-row justify-around bottom-0 fixed text-white m-0">
      <div className="flex flex-row  justify-between align-middle items-center w-full py-5 px-2 md:p-5">
        <div className="w-1/9 hidden md:flex">
          <img
            src={tracksPlayer[trackIndex].album.picture}
            alt="music"
            className="w-12 h-12"
          />
        </div>
        <div className="md:w-1/5 w-2/5 hidden md:flex text-c">
          <h2 className="truncate">{tracksPlayer[trackIndex].title}</h2>
          <h3 className="truncate">
            From {tracksPlayer[trackIndex].artist.name}
          </h3>
        </div>

        <p className="w-1/8">{secondsToHms(audioRef.current.currentTime)}</p>

        <div className=" w-full mx-5 justify-center flex items-center flex-col md:w-2/6">
          <div className="flex w-full items-center justify-center">
            <AudioControl
              isPlaying={isPlaying}
              onPrevClick={toPrevTrack}
              onNextClick={toNextTrack}
              onPlayPauseClick={setIsPlaying}
            />
          </div>
          <input
            type="range"
            value={trackProgress}
            step="1"
            min="0"
            max={duration || `${duration}`}
            className="progess my-2 w-full"
            onChange={(e) => onScrub(e.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
          />
        </div>

        <p className="w-1/8">{secondsToHms(audioRef.current.duration)}</p>
      </div>
    </div>
  );
}

Player.propTypes = {
  currentId: PropTypes.string.isRequired,
};

export default Player;
