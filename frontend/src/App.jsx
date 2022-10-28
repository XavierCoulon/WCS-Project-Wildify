import { useEffect, useState } from "react";
import "./App.css";
import { songsFetcher } from "./utils/axiosTools";
import Player from "./components/Player";
import TrackList from "./components/TrackList";

function App() {
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
    <div className="min-h-screen h-screen w-full">
      <img
        className="fixed top-0 left-0 object-cover"
        src="src/assets/background-main.png"
        alt="background"
      />
      <TrackList tracks={tracks} handleCurrentId={handleCurrentId} />
      {tracks.length && <Player currentId={currentId} tracks={tracks} />}
    </div>
  );
}

export default App;
