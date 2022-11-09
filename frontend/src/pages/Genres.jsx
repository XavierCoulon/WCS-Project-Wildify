import React from "react";
import PropTypes from "prop-types";
import GenresList from "../components/GenresList";

function Genres({ handleCurrentId }) {
  return (
    <div className="bg-slate-800 w-full h-full text-white">
      <GenresList handleCurrentId={handleCurrentId} />
    </div>
  );
}

export default Genres;

Genres.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
