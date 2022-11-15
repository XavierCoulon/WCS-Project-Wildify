import PropTypes from "prop-types";
import FavouritesList from "../components/FavouritesList";

function Favourites({ handleCurrentId }) {
  return (
    <div className="bg-white dark:bg-slate-800 w-full h-full text-black dark:text-white">
      <FavouritesList handleCurrentId={handleCurrentId} />
    </div>
  );
}
export default Favourites;

Favourites.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
