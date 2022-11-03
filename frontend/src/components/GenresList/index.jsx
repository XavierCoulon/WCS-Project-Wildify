import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { genresFetcher } from "../../utils/axiosTools";

function GenresList({ setCurrentPage, setGenreName }) {
  const [genres, setGenres] = useState(null);

  useEffect(() => {
    genresFetcher.getAll().then((result) => setGenres(result));
  }, []);

  if (!genres) return <div>Loading ...</div>;

  return (
    <div className="grid-cols-4 grid-flow-row">
      {genres.map((genre) => (
        <button
          className="text-grey-500 mr-5 mt-5 py-2 px-6 rounded-lg border-0 text-sm font-medium bg-blue-50 text-blue-700 hover:bg-amber-50 hover:text-amber-700"
          type="button"
          onClick={() => {
            setGenreName(genre.name);
            setCurrentPage("GENRES");
          }}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}

export default GenresList;

GenresList.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  setGenreName: PropTypes.func.isRequired,
};
