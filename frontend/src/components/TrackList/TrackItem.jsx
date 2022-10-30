import React from "react";
import PropTypes from "prop-types";

function TrackItem({ id, title, duration, artist, picture, handleCurrentId }) {
  const roundedTime = (time) => {
    const result = [];
    const splitedTime = time.split(":");
    const minSec = Math.round(+splitedTime[1] * 100) / 100;
    result.push(splitedTime[0], minSec.toString().padStart(5, "0"));
    return result.join(":");
  };

  return (
    <div className="flex p-2 bg-gray opacity-90 rounded-md my-1 text-white items-center justify-between  overflow-hidden flex-row align-middle">
      <img className="w-10 h-10" src={picture} alt="" />
      <h2 className="mx-7">
        {title} - {artist}
      </h2>

      <p className="mx-7">{roundedTime(duration)}</p>
      <button type="button" onClick={() => handleCurrentId(id)}>
        &#9654;
      </button>

    </div>
  );
}

export default TrackItem;

TrackItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  handleCurrentId: PropTypes.func.isRequired,
};
