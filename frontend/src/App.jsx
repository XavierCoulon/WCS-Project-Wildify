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
import usePlayerContext from "./Context/PlayerContext";
import { songsFetcher } from "./utils/axiosTools";
import Layout from "./components/Layout/Index";

function App() {
  const [currentId, setCurrentId] = useState();
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

      <Routes>
        <Route
          path="/"
          element={<Layout tracksPlayer={tracksPlayer} currentId={currentId} />}
        >
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
        </Route>
      </Routes>


      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
