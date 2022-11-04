import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PlaySvg from "@components/SVG/Play";
import storage from "../../utils/localStorageTools";

function TrackItem({ id, title, duration, artist, picture, handleCurrentId }) {
  const roundedTime = (time) => {
    const result = [];
    const splitedTime = time.split(":");
    const minSec = Math.round(+splitedTime[1] * 100) / 100;
    result.push(splitedTime[0], minSec.toString().padStart(5, "0"));
    return result.join(":");
  };

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (storage.get("favorite") && storage.get("favorite").includes(id))
      setIsFavorite(true);
  }, [id]);

  const handleClickFavorite = () => {
    if (isFavorite) {
      storage.remove("favorite", id);
    } else {
      storage.set("favorite", id);
    }

    setIsFavorite((state) => !state);
  };

  return (
    <div className="flex p-2 bg-gray opacity-90 rounded-md my-1 text-white items-center justify-between  flex-row align-middle">
      <img className="w-10 h-10" src={picture} alt="" />
      <h2 className="mx-7">
        {title} - {artist}
      </h2>

      <p className="mx-7">{roundedTime(duration)}</p>
      <div className="flex w-20 justify-between">
        <div
          className={`w-8 h-8 bg-[size:100%] ${
            isFavorite
              ? "bg-[url('https://upload.wikimedia.org/wikipedia/commons/3/35/Emoji_u2665.svg')]"
              : "bg-[url('https://upload.wikimedia.org/wikipedia/commons/4/4f/Ei-heart.svg')]"
          }`}
          onClick={handleClickFavorite}
          role="button"
          tabIndex={0}
          label="favorite"
          aria-hidden="true"
        />
        <p>...</p>
        <button type="button" onClick={() => handleCurrentId(id)}>
          <PlaySvg color="white" />
        </button>
      </div>
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
