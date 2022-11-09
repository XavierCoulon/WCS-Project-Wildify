import React, { useRef } from "react";
import { playlistsFetcher } from "../../utils/axiosTools";

function PlaylistCreation() {
  const inputTitle = useRef(null);
  const inputDescription = useRef(null);

  const createPlaylist = () => {
    playlistsFetcher.create({
      title: inputTitle.current.value,
      description: inputDescription.current.value,
      picture: "toto",
    });
  };

  return (
    <div>
      <label htmlFor="title">Title</label>
      <input ref={inputTitle} id="title" type="text" />
      <label htmlFor="title">Description</label>
      <input ref={inputDescription} id="description" type="text" />
      <button type="button" label="Create" onClick={createPlaylist}>
        CREATE
      </button>
    </div>
  );
}

export default PlaylistCreation;
