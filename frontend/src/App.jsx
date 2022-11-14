import React, { Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { songsFetcher } from "./utils/axiosTools";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Uploads from "./pages/Uploads";
import Playlists from "./pages/Playlists";
import PlaylistTracks from "./components/PlaylistsList/PlaylistTracks";
import Profile from "./pages/Profile";
import Genres from "./pages/Genres";
import GenresItem from "./components/GenresList/GenresItem";
import Navbar from "./components/Layout/Navbar";
import Sidebar from "./components/Layout/Sidebar";
import usePlayerContext from "./Context/PlayerContext";
import Player from "./components/Player";

function App() {
  const [currentId, setCurrentId] = useState("");
  const [isMenu, setIsMenu] = useState(false);
  const { tracks, setTracks } = usePlayerContext();

  useEffect(() => {
    songsFetcher.getAll().then((res) => {
      setTracks(res);
      setCurrentId(res[0].id);
    });
  }, []);

  const handleCurrentId = ({ id }) => {
    setCurrentId(id);
    setIsPlaying(true);
  };

  const handlePLay = () => {
    setIsPlaying((state) => !state);
  };

  return (
    <>
      <div className="h-screen w-full flex-col items-center justify-start align-middle flex">
        <Navbar isMenu={isMenu} setIsMenu={setIsMenu} />
        <div className="flex w-full h-screen">
          {!isMenu && <Sidebar />}
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  tracks={tracks}
                  handleCurrentId={handleCurrentId}
                  currentId={currentId}
                  setCurrentId={setCurrentId}
                />
              }
            />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/playlists/:id" element={<PlaylistTracks />} />
            <Route path="/uploads" element={<Uploads />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/favourites" element={<Favourites />} />
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
        {tracks.length && <Player currentId={currentId} tracks={tracks} />}
      </div>

      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
