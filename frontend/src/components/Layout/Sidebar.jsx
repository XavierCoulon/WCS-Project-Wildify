/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import PropTypes from "prop-types";
import navLinks from "../../config/navLinks";
import NavLink from "./NavLink";

export default function Sidebar({ setCurrentPage, currentPage }) {
  return (
    <div className="w-1/5 min-w-[150px] px-10 h-full flex flex-col justify-start align-middle items-center text-zinc-900 dark:text-white bg-slate-500 dark:bg-grayCustom">
      {navLinks.map((link) => (
        <NavLink
          link={link}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ))}
    </div>
  );
}

Sidebar.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired,
};
