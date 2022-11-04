import React from "react";
import PropTypes from "prop-types";
import GenresItem from "../components/GenresList";

function Genres({ genreName }) {
  return (
    <div className="bg-slate-800 w-full h-full text-white">
      <GenresItem genreName={genreName} />
    </div>
  );
}

export default Genres;

Genres.propTypes = {
  genreName: PropTypes.string.isRequired,
};
