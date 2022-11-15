import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Uploads from "./pages/Uploads";
import Playlists from "./pages/Playlists";
import Profile from "./pages/Profile";
import Genres from "./pages/Genres";
import GenresItem from "./components/GenresList/GenresItem";
import Navbar from "./components/Layout/Navbar";
import Sidebar from "./components/Layout/Sidebar";
import usePlayerContext from "./Context/PlayerContext";
import Player from "./components/Player";
import { songsFetcher } from "./utils/axiosTools";

function App() {
  const [currentId, setCurrentId] = useState();
  const [isMenu, setIsMenu] = useState(false);
  const { tracksPlayer, setTracksPlayer } = usePlayerContext();

  const handleCurrentId = ({ id }) => {
    setCurrentId(id);
    console.error("1. Id changed");
  };

  useEffect(() => {
    songsFetcher.getAll().then((res) => {
      setTracksPlayer(res.slice(0, 8));
      setCurrentId(res[0].id);
    });
  }, []);

  if (!tracksPlayer) return <div>Loading ...</div>;

  return (
    <>
      <div className="h-full w-full flex-col items-center justify-start align-middle flex">
        <Navbar isMenu={isMenu} setIsMenu={setIsMenu} />
        <div className="flex w-full h-full">
          {!isMenu && <Sidebar />}
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  handleCurrentId={handleCurrentId}
                  currentId={currentId}
                  setCurrentId={setCurrentId}
                />
              }
            />
            <Route
              path="/playlists"
              element={<Playlists handleCurrentId={handleCurrentId} />}
            />
            <Route path="/uploads" element={<Uploads />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/favourites"
              element={<Favourites handleCurrentId={handleCurrentId} />}
            />
            <Route
              path="/genres"
              element={<Genres handleCurrentId={handleCurrentId} />}
            />
            <Route
              path="/genres/:name"
              element={<GenresItem handleCurrentId={handleCurrentId} />}
            />
          </Routes>
        </div>
        {tracksPlayer.length && <Player currentId={currentId} />}
      </div>

      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
