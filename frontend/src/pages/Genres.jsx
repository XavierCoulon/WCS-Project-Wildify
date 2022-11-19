import React from "react";
import PropTypes from "prop-types";
import GenresList from "../components/GenresList/index";

function Genres({ handleCurrentId }) {
  return (
    <div className="bg-[#F3E8F3] dark:bg-slate-800 w-full h-screen text-white">
      <GenresList handleCurrentId={handleCurrentId} defaultGenre="Chill Out" />
    </div>
  );
}

export default Genres;

Genres.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
