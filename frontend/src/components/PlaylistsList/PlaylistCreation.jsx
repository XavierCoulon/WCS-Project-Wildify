import PropTypes from "prop-types";
import { toast } from "react-toastify";
import React, { useRef } from "react";
import { playlistsFetcher } from "../../utils/axiosTools";

function PlaylistCreation({ reload }) {
  const inputTitle = useRef(null);
  const inputDescription = useRef(null);
  const createPlaylist = (e) => {
    e.preventDefault();
    playlistsFetcher
      .create({
        title: inputTitle.current.value,
        description: inputDescription.current.value,
        picture: "toto",
      })
      .then(() =>
        toast.success(`All good, playlist ${inputTitle.current.value} created.`)
      )
      .then(() => {
        inputTitle.current.value = "";
        inputDescription.current.value = "";
        reload();
      });
  };

  return (
    <div>
      <label htmlFor="title">Title</label>
      <input className="border-2" ref={inputTitle} id="title" type="text" />
      <label htmlFor="title">Description</label>
      <input
        className="border-2"
        ref={inputDescription}
        id="description"
        type="text"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-2 rounded"
        type="button"
        label="Create"
        onClick={createPlaylist}
      >
        CREATE
      </button>
    </div>
  );
}

export default PlaylistCreation;

PlaylistCreation.propTypes = {
  reload: PropTypes.func.isRequired,
};
