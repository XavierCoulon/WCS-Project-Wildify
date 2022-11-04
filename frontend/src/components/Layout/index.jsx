import PropTypes from "prop-types";
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children, setCurrentPage, currentPage }) {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div className="h-screen w-full flex-col items-center justify-start align-middle flex">
      <Navbar
        isMenu={isMenu}
        setIsMenu={setIsMenu}
        setCurrentPage={setCurrentPage}
      />
      <div className="flex w-full h-full">
        {!isMenu && (
          <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        )}
        {children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  setCurrentPage: PropTypes.element.isRequired,
  currentPage: PropTypes.string.isRequired,
};
