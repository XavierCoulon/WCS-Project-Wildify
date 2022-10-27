import { useEffect, useState } from "react";
import "./App.css";
import { songsFetcher } from "./utils/axiosTools";
import TrackList from "./components/TrackList";

function App() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    songsFetcher.getAll().then((res) => setTracks(res));
  }, []);

  return (
    <div className="min-h-screen h-screen w-full">
      <img
        className="fixed top-0 left-0 object-cover"
        src="src/assets/background-main.png"
        alt="background"
      />
      <TrackList tracks={tracks} />
    </div>
  );
}

export default App;
