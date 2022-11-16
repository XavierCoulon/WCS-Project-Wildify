import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import TrackList from "../components/TrackList";
import RecentlyPlayed from "../components/RecentlyPlayed";
import GenresList from "../components/GenresList/index_original";
import { songsFetcher } from "../utils/axiosTools";
import WaveImg from "../utils/waveImg";
import wave from "../assets/wave.png";

function Home({ handleCurrentId }) {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    songsFetcher.getAll().then((res) => {
      setTracks(res.slice(0, 8));
    });
  }, []);

  if (!tracks) return <div>Loading ...</div>;

  return (
    <div className="bg-[#F3E8F3] dark:bg-slate-800 w-full text-black dark:text-white">
      <div className="flex justify-center">
        <img
          className="w-5/6 h-full mx-14 mt-5 mb-0 absolute opacity-25"
          src={wave}
          alt="wave de fond musicale"
        />
        <WaveImg />
      </div>
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
