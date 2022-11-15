import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PlaySvg from "../Player/Play";
import storage from "../../utils/localStorageTools";
import logo from "../../assets/logo.png";

function TrackItem({
  id,
  title,
  duration,
  artist,
  picture,
  handleCurrentId,
  onPlaylist,
  loadPlayer,
}) {
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

  const playlistHandler = (trackId) => {
    onPlaylist(trackId);
  };

  return (
    <div className="flex p-2 bg-gradient-to-r from-gray via-gray-500 to-gray bg-gray opacity-90 rounded-md my-1 text-white items-center  flex-row align-middle">
      <div className="w-1/6">
        <img
          className="w-10 h-10"
          src={`${picture === null ? logo : picture}`}
          alt=""
        />
      </div>
      <h2 className="mx-7 flex-grow w-1/2">
        {title} - {artist}
      </h2>

      <p className="mx-7 flex-grow">{roundedTime(duration)}</p>
      <div className="flex justify-between flex-grow w-2/7">
        <div
          className={`w-7 h-7  bg-no-repeat hover:scale-125 ${
            isFavorite
              ? "bg-[url('https://upload.wikimedia.org/wikipedia/commons/3/35/Emoji_u2665.svg')] bg-[size:90%]"
              : "bg-[url('https://upload.wikimedia.org/wikipedia/commons/4/4f/Ei-heart.svg')] bg-[size:110%]"
          }`}
          onClick={handleClickFavorite}
          role="button"
          tabIndex={0}
          label="favorite"
          aria-hidden="true"
        />
        <span
          className="cursor-pointer "
          aria-hidden="true"
          onClick={() => playlistHandler(id)}
        >
          ...
        </span>
        <button
          className="hover:scale-125"
          type="button"
          onClick={() => {
            loadPlayer();
            handleCurrentId({ id });
          }}
        >
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
  onPlaylist: PropTypes.func.isRequired,
  loadPlayer: PropTypes.func.isRequired,
};
