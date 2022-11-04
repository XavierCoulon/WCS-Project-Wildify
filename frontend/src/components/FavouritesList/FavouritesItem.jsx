import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import TrackItem from "../TrackList/TrackItem";
import { songsFetcher } from "../../utils/axiosTools";

function FavouritesItem({ trackId, handleCurrentId }) {
  const [track, setTrack] = useState(null);

  useEffect(() => {
    songsFetcher.getOne(trackId).then((result) => setTrack(result));
  }, []);

  if (!track) return <div>Loading ...</div>;

  return (
    <div>
      <TrackItem
        key={track.id}
        id={track.id}
        title={track.title}
        duration={track.duration}
        artist={track.artist.name}
        picture={track.album.picture}
        handleCurrentId={handleCurrentId}
      />
    </div>
  );
}

export default FavouritesItem;

FavouritesItem.propTypes = {
  trackId: PropTypes.string.isRequired,
  handleCurrentId: PropTypes.func.isRequired,
};
