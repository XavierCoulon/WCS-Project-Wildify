import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import usePlayerContext from "../Context/PlayerContext";
import AudioControl from "./Player/AudioControl";


function Player({ currentId }) {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { tracks } = usePlayerContext();

  // Refs
  const audioRef = useRef(null);

  const intervalRef = useRef();

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  useEffect(() => {
    audioRef.current = new Audio(tracks[trackIndex].link);
  }, []);

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
      startTimer();
    }
  }, [trackIndex, isPlaying]);

  useEffect(() => {
    const newIndex = tracks.findIndex((e) => e.id === currentId);
    // setIsPlaying(true);
    setTrackIndex(newIndex);
  }, [currentId]);

  function secondsToHms(audioTime) {
    const audioTime2 = Number(audioTime) || 0;
    const m = Math.floor((audioTime2 % 3600) / 60);
    const s = Math.floor((audioTime2 % 3600) % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  }


  const handlePLay = () => {
    setIsPlaying((state) => !state);
  };

  if (audioRef.current === null || tracks.length === 0) return "Loading ...";

  return (
    <div className="w-full md:ml-[200px] h-50 opacity-90 bg-gray flex flex-row justify-around bottom-0 fixed text-white">
      <div className="flex flex-row space-x-10 justify-self-auto w-full p-5">
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
          <p>{secondsToHms(audioRef.current.currentTime)}</p>
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
            max={audioRef.duration}
            className="progess w-full"
            onChange={(e) => onScrub(e.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
          />
        </div>
        <div className="w-1/8">
          <p>{secondsToHms(audioRef.current.duration)}</p>
        </div>
      </div>
    </div>
  );
}

Player.propTypes = {
  currentId: PropTypes.string.isRequired,
};

export default Player;
