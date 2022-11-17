import PropTypes from "prop-types";
import FavouritesList from "../components/FavouritesList";
import favImg from "../assets/Lead-image.png";
import favBg from "../assets/Favorite_bg.png";

function Favourites({ handleCurrentId }) {
  return (
    <div className="bg-[#F3E8F3] dark:bg-slate-800 w-full h-screen text-black dark:text-white">
      <div className="flex relative lg:h-3/6 h-1/5 overflow-hidden">
        <div className="lg:h-1/3 h-1/5">
          <img
            className="opacity-25 absolute w-screen "
            src={favBg}
            alt="favorite background"
          />
        </div>
        <img
          className="h-full w-1/3 ml-5 py-3 z-20"
          src={favImg}
          alt="favorite theme"
        />
        <h1 className="lg:text-5xl font-bold mt-10 lg:ml-20 ml-4 font-mono">
          Favoris
        </h1>
      </div>
      <div className="mt-5">
        <FavouritesList handleCurrentId={handleCurrentId} />
      </div>
    </div>
  );
}
export default Favourites;

Favourites.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
