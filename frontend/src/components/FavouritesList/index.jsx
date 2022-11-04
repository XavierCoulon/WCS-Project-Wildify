import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import storage from "../../utils/localStorageTools";
import FavouritesItem from "./FavouritesItem";

function FavouritesList({ handleCurrentId }) {
  const [favourites, setFavourites] = useState(() => storage.get("favorite"));

  useEffect(() => {
    setFavourites(storage.get("favorite"));
  }, []);
  return (
    <div>
      {favourites &&
        favourites.map((trackId) => (
          <FavouritesItem trackId={trackId} handleCurrentId={handleCurrentId} />
        ))}
    </div>
  );
}

export default FavouritesList;

FavouritesList.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
