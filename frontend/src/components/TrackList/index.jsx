import PropTypes from "prop-types";
import { useState } from "react";
import PlaylistsModal from "../PlaylistsList/PlaylistsModal";
import TrackItem from "./TrackItem";

function TrackList({ tracks, handleCurrentId }) {
  const [playlistsModal, setPlaylistsModal] = useState({
    isActive: false,
    trackId: null,
  });

  const handlerPlaylistModal = (trackId) => {
    setPlaylistsModal({ ...playlistsModal, isActive: true, trackId });
  };

  const handlerCloseModal = () => {
    setPlaylistsModal({ ...playlistsModal, isActive: false, trackId: null });
  };

  return (
    <div className="flex flex-col p-5 ">
      {tracks.map((e) => (
        <TrackItem
          key={e.id}
          id={e.id}
          title={e.title}
          duration={e.duration}
          artist={e.artist.name}
          picture={e.album.picture}
          handleCurrentId={handleCurrentId}
          onPlaylist={handlerPlaylistModal}
        />
      ))}
      {/* <PlaylistCreation /> */}
      {playlistsModal.isActive && (
        <PlaylistsModal
          trackId={playlistsModal.trackId}
          onClose={handlerCloseModal}
        />
      )}
    </div>
  );
}

TrackList.propTypes = {
  tracks: PropTypes.arrayOf().isRequired,
  handleCurrentId: PropTypes.func.isRequired,
};

export default TrackList;
