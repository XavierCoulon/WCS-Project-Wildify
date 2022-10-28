import PropTypes from "prop-types";
import TrackItem from "./TrackItem";

function TrackList({ tracks, handleCurrentId }) {
  return (
    <div className="w-full flex flex-col p-5 ">
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

TrackList.propTypes = {
  tracks: PropTypes.arrayOf().isRequired,
  handleCurrentId: PropTypes.func.isRequired,
};

export default TrackList;
