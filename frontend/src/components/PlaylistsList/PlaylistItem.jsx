import React from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { playlistsFetcher } from "../../utils/axiosTools";

function PlaylistItem({ id, title, trackId }) {
  const assignTrack = () => {
    playlistsFetcher
      .assignTrack(id, { songIds: [trackId] })
      .then(() => toast.success(`All good, track added to playlist ${title}`))
      .catch((error) => {
        toast.error("Oupssss");
        console.error(error);
      });
  };

  return (
    <div className="flex items-center m-1">
      <div className="w-1/2">
        <li key={id}>{title}</li>
      </div>
      <div className="w-1/2">
        <button type="button" label="Add" onClick={assignTrack}>
          Assign
        </button>
      </div>
    </div>
  );
}

export default PlaylistItem;

PlaylistItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  trackId: PropTypes.string.isRequired,
};
