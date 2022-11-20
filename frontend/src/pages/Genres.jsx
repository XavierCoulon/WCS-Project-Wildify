import React from "react";
import PropTypes from "prop-types";
import GenresList from "../components/GenresList/index";

function Genres({ handleCurrentId }) {
  return (
    <div className="bg-pinkCustom dark:bg-blackCustom w-full h-full">
      <GenresList handleCurrentId={handleCurrentId} defaultGenre="Chill Out" />
    </div>
  );
}

export default Genres;

Genres.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
