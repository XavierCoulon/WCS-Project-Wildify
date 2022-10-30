import React, { useState, useRef } from "react";
import { songsFetcher } from "../utils/axiosTools";

function Upload() {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const inputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (
      e.dataTransfer.files[0] &&
      e.dataTransfer.files[0].type === "audio/mpeg"
    ) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    setSelectedFile(event.target.files[0]);
  };

  const onButtonClick = async (event) => {
    event.preventDefault();
    songsFetcher
      .upload(selectedFile)
      .then((result) => {
        console.error(result);
      })
      .catch((error) => {
        const messages = JSON.parse(error.response.data.message);
        for (const message in messages) {
          if (Object.prototype.hasOwnProperty.call(messages, message))
            console.error(messages[message]);
        }
      });
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <form
        className="flex flex-col justify-center m-2 h-64 w-96 "
        onDragEnter={handleDrag}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={inputRef}
          className="hidden"
          id="file"
          type="file"
          accept="mp3"
          onChange={handleChange}
        />

        <label
          className={
            dragActive
              ? "bg-gray-200 w-full h-full border-2 border-dashed rounded-md flex justify-center items-center text-center"
              : " w-full h-full border-2 border-dashed rounded-md flex justify-center items-center text-center"
          }
          htmlFor="file"
        >
          <div>
            <p>Drag and drop your MP3 file here</p>
            <p>
              <i>(or simply click to select it...)</i>
            </p>
            <button
              type="button"
              onClick={onButtonClick}
              className="text-grey-500 mr-5 mt-5 py-2 px-6 rounded-lg border-0 text-sm font-medium bg-blue-50 text-blue-700 hover:bg-amber-50 hover:text-amber-700"
            >
              Upload your file
            </button>
          </div>
        </label>
        {dragActive && (
          <div
            className="absolute w-screen h-screen top-0 right-0 bottom-0 left-0 "
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          />
        )}
      </form>
    </div>
  );
}

export default Upload;
