/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import PropTypes from "prop-types";
import navLinks from "../../config/navLinks";

export default function Sidebar({ setCurrentPage }) {
  return (
    <div className=" w-1/5 min-w-[150px] px-10 h-full flex flex-col justify-start align-middle items-center text-white bg-grayCustom ">
      {navLinks.map((link) => (
        <div
          key={link.id}
          onClick={() => setCurrentPage(link.path)}
          className="w-full my-1 text-gray-400  p-5 border-b-2 border-gray-700 cursor-pointer"
        >
          {link.name}
        </div>
      ))}
    </div>
  );
}

Sidebar.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
};
