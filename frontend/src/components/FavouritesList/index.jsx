import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import storage from "../../utils/localStorageTools";
import { songsFetcher } from "../../utils/axiosTools";
import TrackList from "../TrackList";

function FavouritesList({ handleCurrentId }) {
  const [tracks, setTracks] = useState(null);
  const favourites = storage.get("favorite");

  useEffect(() => {
    songsFetcher
      .getAll()
      .then((result) =>
        setTracks(result.filter((track) => favourites.includes(track.id)))
      );
  }, [favourites]);

  if (!tracks) return <div>Loading ...</div>;

  return (
    <div>
      {favourites && (
        <TrackList tracks={tracks} handleCurrentId={handleCurrentId} />
      )}
    </div>
  );
}

export default FavouritesList;

FavouritesList.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
