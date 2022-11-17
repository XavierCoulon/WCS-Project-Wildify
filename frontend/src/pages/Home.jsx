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
    <div className="bg-[#F3E8F3] dark:bg-slate-800 h-full w-full text-black dark:text-white ">
      <div>
        <h2>Genres</h2>
        <GenresList handleCurrentId={handleCurrentId} />
      </div>
      <div>
        <RecentlyPlayed handleCurrentId={handleCurrentId} />
      </div>
      <div>
        <h2>Aléatoires</h2>
        <TrackList tracks={tracks} handleCurrentId={handleCurrentId} />
      </div>
    </div>
  );
}

export default Home;

Home.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
