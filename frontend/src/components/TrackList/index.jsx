import PropTypes from "prop-types";
import { useState } from "react";
import PlaylistsModal from "../PlaylistsList/PlaylistsModal";
import usePlayerContext from "../../Context/PlayerContext";
import TrackItem from "./TrackItem";

function TrackList({ handleCurrentId, tracks, isPlaying, setIsPlaying }) {
  const [playlistsModal, setPlaylistsModal] = useState({
    isActive: false,
    trackId: null,
  });

  const { tracksPlayer, setTracksPlayer } = usePlayerContext();

  const handlerPlaylistModal = (trackId) => {
    setPlaylistsModal({ ...playlistsModal, isActive: true, trackId });
  };

  const handlerCloseModal = () => {
    setPlaylistsModal({ ...playlistsModal, isActive: false, trackId: null });
  };

  const changeTrack = ({ id }) => {
    console.error("Au changement de track:");
    console.error(id);
    console.error(tracksPlayer);
    handleCurrentId({ id });
  };

  const loadPlayer = () => {
    console.error("Loader chargé");
    setTracksPlayer(tracks);
  };
  console.error(tracks);

  return (
    <div>
      <div className="flex flex-col p-5 ">
        {tracks.map((e) => (
          <TrackItem
            key={e.id}
            id={e.id}
            title={e.title}
            duration={e.duration}
            artist={e.artist.name}
            picture={e.album.picture}
            handleCurrentId={changeTrack}
            onPlaylist={handlerPlaylistModal}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            loadPlayer={loadPlayer}
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
      <div className="h-20 w-full bg-white dark:bg-gray" />
    </div>
  );
}

TrackList.propTypes = {
  tracks: PropTypes.arrayOf().isRequired,
  handleCurrentId: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
};

export default TrackList;
