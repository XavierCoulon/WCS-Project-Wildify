import React from "react";
import GenresList from "../components/GenresList/index";

function Genres({ handleCurrentId }) {
  return (
    <div className="bg-pinkCustom dark:bg-blackCustom w-full h-full mb-28">
      <GenresList handleCurrentId={handleCurrentId} defaultGenre="Chill Out" />
    </div>
  );
}

export default Genres;
