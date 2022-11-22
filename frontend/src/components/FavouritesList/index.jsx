import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import storage from "../../utils/localStorageTools";
import { songsFetcher } from "../../utils/axiosTools";
import TrackList from "../TrackList";

function FavouritesList({ handleCurrentId, favourites, setFavourites }) {
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    songsFetcher.getAll().then((result) => setTracks(result));
  }, []);

  const callBack = () => {
    setFavourites(() => storage.get("favorite"));
  };

  useEffect(() => {
    window.addEventListener("storage", callBack);

    return () => window.removeEventListener("storage", callBack);
  });

  if (!tracks) return <div>Loading ...</div>;

  return (
    <div>
      {favourites && (
        <TrackList
          tracks={tracks.filter((track) => favourites.includes(track.id))}
          handleCurrentId={handleCurrentId}
        />
      )}
    </div>
  );
}

export default FavouritesList;

FavouritesList.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
  setFavourites: PropTypes.func.isRequired,
  favourites: PropTypes.arrayOf.isRequired,
};
