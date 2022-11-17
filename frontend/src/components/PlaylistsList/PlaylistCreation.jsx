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
    <div className="flex lg:flex-row flex-col h-52 bg-F3E8F3 flex-start items-center align-item">
      <div className="w-full md:w-1/2 mr-3">
        <label
          htmlFor="title text-black font-bold py-2"
          className="py-1 px-3 mb-3"
        >
          Title
        </label>
        <input
          className="text-gray-700 w-full shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3"
          ref={inputTitle}
          id="title"
          type="text"
          placeholder="Title..."
        />
      </div>
      <div className="w-full md:w-1/2">
        <label htmlFor="title" className="py-1 px-3 mb-3">
          Description
        </label>
        <input
          className="text-gray-700 w-full shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3"
          ref={inputDescription}
          id="description"
          type="text"
          placeholder="Description..."
        />
      </div>
      <div className="flex align-bottom justify-end">
        <button
          className="bg-white hover:bg-black text-red-600 py-1.5 pb px-3 rounded ml-4 flex"
          type="button"
          label="Create"
          onClick={createPlaylist}
        >
          CREATE
        </button>
      </div>
    </div>
  );
}

export default PlaylistCreation;

PlaylistCreation.propTypes = {
  reload: PropTypes.func.isRequired,
};
