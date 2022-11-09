/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function NavLink({ link, currentPage, setCurrentPage }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (link.path === currentPage) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [currentPage]);

  return (
    <div
      key={link.id}
      onClick={() => setCurrentPage(link.path)}
      className={`flex flex-row flex-wrap justify-between items-center align-middle w-full h-full my-1 ${
        active && "text-yellow-300"
      } p-5 border-b-2 border-gray-700 cursor-pointer`}
    >
      <link.icon path={link.path} currentPage={currentPage} />
      <p>{link.name}</p>
    </div>
  );
}

export default NavLink;

NavLink.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
