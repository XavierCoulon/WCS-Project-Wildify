import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import TrackList from "../TrackList";
import { genresFetcher, songsFetcher } from "../../utils/axiosTools";

function GenresList({ handleCurrentId }) {
  const [genresList, setGenresList] = useState(null);
  const [currentGenre, setCurrentGenre] = useState(null);
  const [tracks, setTracks] = useState([]);

  const load = () =>
    genresFetcher.getAll().then((result) => {
      setGenresList(result);
      setCurrentGenre(result[0].name);
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
  if (tracks.length === 0) return <div>No tracks</div>;

  return (
    <>
      <div className="grid grid-cols-4 p-5">
        {genresList.map((genre) => (
          <span
            className="cursor-pointer bg-gray opacity-90 rounded-md my-1 text-white items-center text-center p-1 m-1 "
            aria-hidden="true"
            onClick={() => {
              setCurrentGenre(genre.name);
            }}
          >
            {genre.name}
          </span>
        ))}
      </div>
      {tracks.length === 0 ? (
        <div>No tracks ...</div>
      ) : (
        <TrackList tracks={tracks} handleCurrentId={handleCurrentId} />
      )}
    </>
  );
}

export default GenresList;

GenresList.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
