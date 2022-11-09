import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { playlistsFetcher } from "../../utils/axiosTools";

function PlaylistsList() {
  const [list, setList] = useState(null);

  useEffect(() => {
    playlistsFetcher.getAll().then((result) => setList(result));
  }, []);

  if (!list) return <div>Loading ...</div>;

  return (
    <div className="grid grid-cols-4 p-5">
      {list.map((playlist) => (
        <Link
          className=" bg-gray opacity-90 rounded-md my-1 text-white items-center text-center p-1 m-1 "
          to={`/playlists/${playlist.id}`}
        >
          {playlist.title}
        </Link>
      ))}
    </div>
  );
}

export default PlaylistsList;
