import React, { useState } from "react";
import PropTypes from "prop-types";
import GenresList from "../components/GenresList/index_original";

function Genres({ handleCurrentId }) {
  const [showGenres, setShowGenres] = useState(false);
  return (
    <div className="bg-[#F3E8F3] dark:bg-slate-800 w-full h-screen text-white">
      <GenresList
        showGenres={showGenres}
        setShowGenres={setShowGenres}
        handleCurrentId={handleCurrentId}
      />
    </div>
  );
}

export default Genres;

Genres.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
