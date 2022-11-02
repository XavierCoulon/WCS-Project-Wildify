import Layout from "@components/Layout";
import Home from "@pages/Home";
import Favourites from "@pages/Favourites";
import Uploads from "@pages/Uploads";
import Playlists from "@pages/Playlists";
import Profile from "@pages/Profile";
import "./App.css";
import { useEffect, useState } from "react";
import { songsFetcher } from "./utils/axiosTools";
import Player from "./components/Player";
import TrackList from "./components/TrackList";

function App() {
  const [currentPage, setCurrentPage] = useState("HOME");
  const [tracks, setTracks] = useState([]);
  const [currentId, setCurrentId] = useState("");
  useEffect(() => {
    songsFetcher.getAll().then((res) => {
      setTracks(res);
      setCurrentId(res[0].id);
    });
  }, []);

  const handleCurrentId = (id) => {
    setCurrentId(id);
  };

  return (
    <div>
      <Layout className="bg-slate-800" setCurrentPage={setCurrentPage}>
        {currentPage === "HOME" && <Home />}
        {currentPage === "PLAYLISTS" && <Playlists />}
        {currentPage === "UPLOADS" && <Uploads />}
        {currentPage === "FAVOURITES" && <Favourites />}
        {currentPage === "PROFILE" && <Profile />}
      </Layout>

      <div className="min-h-screen h-screen w-full">
        <TrackList tracks={tracks} handleCurrentId={handleCurrentId} />
        {tracks.length && <Player currentId={currentId} tracks={tracks} />}
      </div>
    </div>
  );
}

export default App;
