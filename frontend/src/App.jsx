import Layout from "@components/Layout";
import Home from "@pages/Home";
import Favourites from "@pages/Favourites";
import Uploads from "@pages/Uploads";
import Playlists from "@pages/Playlists";
import Profile from "@pages/Profile";
import "./App.css";
import { useEffect, useState } from "react";
import { songsFetcher } from "./utils/axiosTools";

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
      <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
        {currentPage === "HOME" && (
          <Home
            tracks={tracks}
            handleCurrentId={handleCurrentId}
            currentId={currentId}
          />
        )}
        {currentPage === "PLAYLISTS" && <Playlists />}
        {currentPage === "UPLOADS" && <Uploads />}
        {currentPage === "FAVOURITES" && <Favourites />}
        {currentPage === "PROFILE" && <Profile />}
      </Layout>
    </div>
  );
}

export default App;
