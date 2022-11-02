import Layout from "@components/Layout";
import Home from "@pages/Home";
import Favourites from "@pages/Favourites";
import Uploads from "@pages/Uploads";
import Playlists from "@pages/Playlists";
import Profile from "@pages/Profile";
import "./App.css";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("HOME");

  return (
    <Layout className="bg-slate-800" setCurrentPage={setCurrentPage}>
      {currentPage === "HOME" && <Home />}
      {currentPage === "PLAYLISTS" && <Playlists />}
      {currentPage === "UPLOADS" && <Uploads />}
      {currentPage === "FAVOURITES" && <Favourites />}
      {currentPage === "PROFILE" && <Profile />}
    </Layout>
  );
}
export default App;
