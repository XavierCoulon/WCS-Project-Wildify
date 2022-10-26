import Home from "@pages/Home";
// import { useEffect, useState } from "react";

import "./App.css";
// Test appel api
// import {
//   albumsFetcher,
//   genresFetcher,
//   playlistsFetcher,
//   songsFetcher,
// } from "./utils/axiosTools";

function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   albumsFetcher.getAll().then((res) => setData(res));
  // }, []);

  // console.log(data);

  return (
    <div className="App">
      <Home />
      <p>coucou</p>
    </div>
  );
}

export default App;
