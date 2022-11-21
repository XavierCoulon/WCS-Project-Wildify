import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import TrackList from "../components/TrackList";
import RecentlyPlayed from "../components/RecentlyPlayed";
import { songsFetcher } from "../utils/axiosTools";
import musicHome from "../assets/music-home.jpg";
import WaveImg from "../assets/waveImg";
import FavouritesList from "../components/FavouritesList";

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
    <div className="flex flex-col bg-pinkCustom dark:bg-blackCustom h-full w-full  text-black dark:text-white ">
      <div className="mx-32 relative">
        <img
          className="h-72  w-full rounded-2xl absolute "
          src={musicHome}
          alt="fond page d'accueil"
        />
        <div className="abosolute overflow-hidden z-30 opacity-60">
          <WaveImg />
        </div>
      </div>
      <div className="my-10">
        <h2 className="px-3 py-1 rounded-lg text-2xl  text-black dark:text-white">
          Best Genres
        </h2>
        <div className="flex ">
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
      </div>
      <div>
        <h2 className="px-3 py-1 rounded-lg text-2xl  text-black dark:text-white">
          Favorites
        </h2>
        <FavouritesList />
      </div>
      <div className="py-14">
        <RecentlyPlayed handleCurrentId={handleCurrentId} />
      </div>

      <div>
        <h2 className="px-3 py-1 rounded-lg text-2xl  text-black dark:text-white">
          All songs
        </h2>
        <TrackList tracks={tracks} handleCurrentId={handleCurrentId} />
      </div>
    </div>
  );
}

export default Home;

Home.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
