import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import TrackList from "../TrackList";
import { playlistsFetcher } from "../../utils/axiosTools";

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

  if (!tracks) return <div>Loading ...</div>;

  return (
    <>
      <div className="grid grid-cols-4 p-5">
        {list.map((playlist) => (
          <span
            className="cursor-pointer bg-gray opacity-90 rounded-md my-1 text-white items-center text-center p-1 m-1 "
            aria-hidden="true"
            onClick={() => {
              setCurrentList(playlist.id);
            }}
          >
            {playlist.title}
          </span>
        ))}
      </div>
      <TrackList tracks={tracks} handleCurrentId={handleCurrentId} />
    </>
  );
}

export default PlaylistsList;

PlaylistsList.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
