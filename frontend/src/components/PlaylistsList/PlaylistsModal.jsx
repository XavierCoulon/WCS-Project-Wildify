import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { playlistsFetcher } from "../../utils/axiosTools";
import PlaylistItem from "./PlaylistItem";

function PlaylistsModal({ trackId, onClose }) {
  const [data, setData] = useState();

  useEffect(() => {
    playlistsFetcher.getAll().then((result) => setData(result));
  }, []);

  if (!data) return <div>Loading ...</div>;

  return (
    <div className="container flex justify-center mx-auto">
      <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
        <div className="flex flex-col max-w-sm p-6 bg-white ">
          <span
            aria-hidden="true"
            onClick={onClose}
            className="flex justify-end cursor-pointer"
          >
            X
          </span>
          <div className="mt-4 flex">
            {data && (
              <div className="text-center">
                <ul>
                  {data.map((playlist) => (
                    <PlaylistItem
                      key={playlist.id}
                      id={playlist.id}
                      title={playlist.title}
                      trackId={trackId}
                    />
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaylistsModal;

PlaylistsModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  trackId: PropTypes.string.isRequired,
};
