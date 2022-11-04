import React from "react";
import NextSvg from "./Next";
import PauseSvg from "./Pause";
import PlaySvg from "./Play";
import PrevSvg from "./Prev";

function AudioControl({
  isPlaying,
  handleIsPlaying,
  onPrevClick,
  onNextClick,
}) {
  return (
    <div className="audioControl">
      {/* Bouton prev */}
      <button
        type="button"
        className="prevBut"
        aria-label="Previous"
        onClick={onPrevClick}
      >
        <PrevSvg />
      </button>

      {/* Bouton play/pause selon l'état de isPlaying */}

      {isPlaying ? (
        <button
          type="button"
          className="pauseBut"
          aria-label="Pause"
          onClick={handleIsPlaying}
        >
          <PauseSvg />
        </button>
      ) : (
        <button
          type="button"
          className="playBut"
          aria-label="Play"
          onClick={handleIsPlaying}
        >
          <PlaySvg />
        </button>
      )}

      {/* Bouton next */}
      <button
        type="button"
        className="nextBut"
        aria-label="Next"
        onClick={onNextClick}
      >
        <NextSvg />
      </button>
    </div>
  );
}

export default AudioControl;
