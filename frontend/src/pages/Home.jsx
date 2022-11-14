import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import usePlayerContext from "../Context/PlayerContext";
import { songsFetcher } from "../utils/axiosTools";
import TrackList from "../components/TrackList";
import GenresList from "../components/GenresList";

function Home({ handleCurrentId, setGenreName, setCurrentId }) {
  const { tracks, setTracks } = usePlayerContext();
  const [displayedTracks, setDisplayedTracks] = useState(tracks);

  useEffect(() => {
    songsFetcher.getAll().then((res) => {
      setTracks(res);
      setDisplayedTracks(res);
      setCurrentId(res[0].id);
    });
  }, []);

  return (
    <div className="bg-white dark:bg-slate-800 w-full h-full text-black dark:text-white">
      <GenresList setGenreName={setGenreName} />
      <TrackList tracks={displayedTracks} handleCurrentId={handleCurrentId} />
    </div>
  );
}

export default Home;

Home.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
  setGenreName: PropTypes.func.isRequired,
  setCurrentId: PropTypes.func.isRequired,
};
