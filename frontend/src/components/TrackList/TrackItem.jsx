import React from "react";
import PropTypes from "prop-types";

function TrackItem({ title, duration, artist, picture }) {
  return (
    <div className="flex p-2 bg-gray opacity-90 rounded-md my-1 text-white items-center justify-between  overflow-hidden flex-row align-middle">
      <img className="w-10 h-10" src={picture} alt="" />
      <h2 className="mx-7">
        {title} - {artist}
      </h2>
      <p className="mx-7">{duration}</p>
    </div>
  );
}

export default TrackItem;

TrackItem.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};
