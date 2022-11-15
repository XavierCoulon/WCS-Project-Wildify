import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import TrackList from "../components/TrackList";
import RecentlyPlayed from "../components/RecentlyPlayed";
import GenresList from "../components/GenresList/index_original";
import { songsFetcher } from "../utils/axiosTools";

function Home({ handleCurrentId }) {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    songsFetcher.getAll().then((res) => {
      setTracks(res.slice(0, 8));
    });
  }, []);

  if (!tracks) return <div>Loading ...</div>;

  return (
    <div className="bg-white dark:bg-slate-800 w-full text-black dark:text-white">
      <GenresList handleCurrentId={handleCurrentId} />
      <RecentlyPlayed handleCurrentId={handleCurrentId} />
      <TrackList tracks={tracks} handleCurrentId={handleCurrentId} />
    </div>
  );
}

export default Home;

Home.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
