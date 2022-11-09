import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { songsFetcher } from "../../utils/axiosTools";
import TrackItem from "../TrackList/TrackItem";

function GenresItem({ handleCurrentId }) {
  const [tracks, setTracks] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    songsFetcher.getAllByGenre(name).then((result) => setTracks(result));
  }, []);

  if (!tracks) return <div>Loading ...</div>;
  if (tracks.length === 0) return <div>No tracks on this genre...</div>;

  return (
    <div>
      {tracks.map((e) => (
        <TrackItem
          key={e.id}
          id={e.id}
          title={e.title}
          duration={e.duration}
          artist={e.artist.name}
          picture={e.album.picture}
          handleCurrentId={handleCurrentId}
        />
      ))}
    </div>
  );
}

export default GenresItem;

GenresItem.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
