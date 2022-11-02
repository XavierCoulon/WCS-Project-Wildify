/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";

function Navbar({ setIsMenu, isMenu }) {
  return (
    <div className=" bg-grayCustom px-10 flex justify-between items-center align-middle w-full h-24">
      {isMenu ? (
        <img
          onClick={() => setIsMenu((state) => !state)}
          className="w-10 mr-5 md:mr-24 lg:hidden"
          src="src/assets/burger-icon.png"
          alt="burger"
        />
      ) : (
        <img
          onClick={() => setIsMenu((state) => !state)}
          className="w-10 mr-5 md:mr-24 lg:hidden"
          src="src/assets/burger-icon-cross.png "
          alt="burger"
        />
      )}
      <input
        type="text"
        className="bg-slate-800 rounded-lg w-3/5 px-3 py-1 border-0 text-slate-400 focus:border-0 lg:ml-28"
        placeholder="Search..."
      />
      <img src="src/assets/logo.png" alt="logo" className="w-10" />
    </div>
  );
}
Navbar.propTypes = {
  setIsMenu: PropTypes.func.isRequired,
  isMenu: PropTypes.bool.isRequired,
};
export default Navbar;
