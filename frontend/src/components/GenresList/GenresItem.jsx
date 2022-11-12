import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { songsFetcher } from "../../utils/axiosTools";
import TrackList from "../TrackList";
import usePlayerContext from "../../Context/PlayerContext";

function GenresItem({ handleCurrentId }) {
  const { name } = useParams();
  const { tracks, setTracks } = usePlayerContext();

  useEffect(() => {
    songsFetcher.getAllByGenre(name).then((result) => setTracks(result));
  }, []);

  if (!tracks) return <div>Loading ...</div>;
  if (tracks.length === 0) return <div>No tracks on this genre...</div>;

  return (
    <div className="w-full">
      <TrackList tracks={tracks} handleCurrentId={handleCurrentId} />
    </div>
  );
}

export default GenresItem;

GenresItem.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
