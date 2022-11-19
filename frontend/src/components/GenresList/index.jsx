import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TrackList from "../TrackList";
import { genresFetcher, songsFetcher } from "../../utils/axiosTools";
import imagesGenres from "../ImageGenre";

function GenresList({ handleCurrentId }) {
  const [genresList, setGenresList] = useState(null);
  const [currentGenre, setCurrentGenre] = useState("");
  const [tracks, setTracks] = useState(null);

  const location = useLocation();

  const load = () =>
    genresFetcher.getAll().then((result) => {
      setGenresList(result);
      if (location.state) {
        setCurrentGenre(location.state.genre);
      } else {
        setCurrentGenre(result[0].name);
      }
    });

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    if (currentGenre) {
      songsFetcher
        .getAllByGenre(currentGenre)
        .then((result) => setTracks(result));
    }
  }, [currentGenre]);

  if (!tracks) return <div>Loading ...</div>;

  return (
    <div className="m-5 align-middle">
      <div className="m-2">
        <span className="px-3 py-1 rounded-lg text-base  text-black dark:text-yellowCustom dark:text-2xl">
          Genres
        </span>
      </div>
      <div className="m-2 grid grid-cols-custom gap-2 justify-items-center">
        {genresList.map((genre, index) => (
          <div
            aria-hidden="true"
            onClick={() => {
              setCurrentGenre(genre.name);
            }}
          >
            <img
              className="w-64 h-64 cursor-pointer rounded-xl opacity-80 hover:opacity-100"
              src={imagesGenres[index]}
              alt=""
            />
            <span
              key={genre.id}
              className="flex cursor-pointer px-3 rounded-md dark:text-white dark:hover:text-yellowCustom hover:text-red-400  text-black"
            >
              {genre.name}
            </span>
          </div>
        ))}
      </div>
      <div className="m-2 h-80 flex justify-center items-center ">
        {tracks.length === 0 ? (
          <div>No tracks ...</div>
        ) : (
          <TrackList tracks={tracks} handleCurrentId={handleCurrentId} />
        )}
      </div>
    </div>
  );
}

export default GenresList;

GenresList.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
