import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import TrackList from "../components/TrackList";
import RecentlyPlayed from "../components/RecentlyPlayed";
import { songsFetcher } from "../utils/axiosTools";

function Home({ handleCurrentId }) {
  const [tracks, setTracks] = useState([]);
  const bestGenres = ["Chill Out", "rnb", "Rock"];

  useEffect(() => {
    songsFetcher.getAll().then((res) => {
      setTracks(res.slice(0, 8));
    });
  }, []);

  if (!tracks) return <div>Loading ...</div>;

  return (
    <div className="bg-[#F3E8F3] dark:bg-blackCustom h-full w-full  text-black dark:text-white ">
      <div>
        <h2>Best Genres</h2>
        {bestGenres.map((genre) => (
          <Link
            key={genre}
            to="/genres"
            state={{ genre }}
            className=" flex justify-center  items-center h-20 w-40 bg-gradient-to-l from-gray via-gray-500 to-gray opacity-90 rounded-md my-1 text-white text-center p-1 m-1 hover:scale-125 "
          >
            {genre}
          </Link>
        ))}
      </div>
      <div>
        <RecentlyPlayed handleCurrentId={handleCurrentId} />
      </div>
      <div>
        <h2>Shuffle</h2>
        <TrackList tracks={tracks} handleCurrentId={handleCurrentId} />
      </div>
    </div>
  );
}

export default Home;

Home.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
