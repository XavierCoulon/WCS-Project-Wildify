import PropTypes from "prop-types";
import TrackItem from "./TrackItem";

function TrackList({ tracks }) {
  return (
    <div className="w-full flex flex-col p-5 ">
      {tracks.map((e) => (
        <TrackItem
          key={e.id}
          title={e.title}
          duration={e.duration}
          artist={e.artist.name}
          picture={e.album.picture}
        />
      ))}
    </div>
  );
}

TrackList.propTypes = {
  tracks: PropTypes.arrayOf().isRequired,
};

export default TrackList;
