import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TrackList from "../TrackList";
import { playlistsFetcher } from "../../utils/axiosTools";
import PlaylistCreation from "./PlaylistCreation";

function PlaylistsList({ handleCurrentId }) {
  const [list, setList] = useState(null);
  const [currentList, setCurrentList] = useState(null);
  const [tracks, setTracks] = useState(null);

  const load = () =>
    playlistsFetcher.getAll().then((result) => {
      setList(result);
      setCurrentList(result[0].id);
    });

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    if (currentList) {
      playlistsFetcher
        .getTracks(currentList)
        .then((result) => setTracks(result.songs));
    }
  }, [currentList]);

  const onDelete = (playlistId) => {
    playlistsFetcher
      .delete(playlistId)
      .then(() => toast.success(`All good, playlist deleted.`))
      .then(() => load());
  };

  if (!tracks) return <div>Loading ...</div>;

  return (
    <>
      <div>
        <PlaylistCreation reload={load} />
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 p-5">
        {list.map((playlist) => (
          <div className="flex justify-center  items-center lg:h-28 md:h-16 h-7  bg-gradient-to-l from-gray via-gray-500 to-gray opacity-90 rounded-md my-1 text-white text-center p-1 m-1 hover:scale-125 ">
            <span
              className="cursor-pointer w-48"
              aria-hidden="true"
              onClick={() => {
                setCurrentList(playlist.id);
              }}
            >
              {playlist.title}
            </span>
            <span
              aria-hidden="true"
              className="cursor-pointer"
              onClick={() => {
                onDelete(playlist.id);
              }}
            >
              &#x1F5D1;
            </span>
          </div>
        ))}
      </div>

      {tracks.length === 0 ? (
        <div>No tracks ...</div>
      ) : (
        <TrackList tracks={tracks} handleCurrentId={handleCurrentId} />
      )}
    </>
  );
}

export default PlaylistsList;

PlaylistsList.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
