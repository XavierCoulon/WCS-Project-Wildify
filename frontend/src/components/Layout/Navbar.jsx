/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../Context/ThemeContext";

function Navbar({ setIsMenu, isMenu }) {
  const { handleToggleDarkMode } = useContext(ThemeContext);

  return (
    <div className="bg-[#F3E8F3] fixed top-0 dark:bg-grayCustom p-6 flex justify-between items-center align-middle w-full h-[96px]">
      {isMenu ? (
        <img
          onClick={() => setIsMenu((state) => !state)}
          className="w-10 h-10 mr-5 md:mr-24 md:hidden"
          src="src/assets/burger-icon-cross.png"
          alt="burger"
        />
      ) : (
        <img
          onClick={() => setIsMenu((state) => !state)}
          className="w-10  mr-5 md:mr-24 md:hidden"
          src="src/assets/burger-icon.png "
          alt="burger"
        />
      )}
      <input
        type="text"
        className="dark:bg-slate-800 bg-white rounded-lg w-3/5 px-3 py-1 border-0 text-slate-400 focus:border-0 lg:ml-28"
        placeholder="Search..."
      />
      <button
        onClick={handleToggleDarkMode}
        type="button"
        className="h-8 w-15 rounded-lg px-1 text-white dark:text-black bg-[#F3E8F3] dark:bg-[#F3E8F3] "
      >
        🌓
      </button>

      <img src="src/assets/logo.png" alt="logo" className="w-10" />
    </div>
  );
}
Navbar.propTypes = {
  setIsMenu: PropTypes.func.isRequired,
  isMenu: PropTypes.bool.isRequired,
};
export default Navbar;
