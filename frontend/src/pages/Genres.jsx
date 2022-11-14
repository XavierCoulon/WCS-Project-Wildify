import React from "react";
import PropTypes from "prop-types";
import GenresList from "../components/GenresList/index_original";

function Genres({ handleCurrentId }) {
  return (
    <div className="bg-white dark:bg-slate-800 w-full h-full text-white">
      <GenresList handleCurrentId={handleCurrentId} />
    </div>
  );
}

export default Genres;

Genres.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
