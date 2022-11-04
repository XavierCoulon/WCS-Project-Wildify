import React from "react";
import PropTypes from "prop-types";
import GenresList from "@components/GenresList";

function Home({ setCurrentPage, setGenreName }) {
  return (
<div className="bg-white dark:bg-slate-800 w-full h-full text-black dark:text-white">
      <p>Home</p>
      <p>Genres</p>

      <GenresList setCurrentPage={setCurrentPage} setGenreName={setGenreName} />
    </div>
  );
}

export default Home;

Home.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  setGenreName: PropTypes.func.isRequired,
};
