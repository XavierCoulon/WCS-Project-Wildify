import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Player from "../Player";
import useWindowSize from "../../hooks/useWindowSize";

function Layout({ tracksPlayer, currentId }) {
  const [isMenu, setIsMenu] = useState(true);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width < 768) {
      setIsMenu(false);
    } else {
      setIsMenu(true);
    }
  }, [width]);

  return (
    <div className="w-screen pt-[96px] h-full flex flex-col">
      <Navbar setIsMenu={setIsMenu} isMenu={isMenu} />
      {isMenu && <Sidebar setIsMenu={setIsMenu} isMenu={isMenu} />}

      <div
        className={`w-full bg-[#F3E8F3] dark:bg-slate-800 ${
          width < 768 ? "" : "pl-[250px]"
        }  overflow-y-scroll h-full flex`}
      >
        <Outlet />
      </div>

      {tracksPlayer.length && <Player currentId={currentId} />}
    </div>
  );
}

export default Layout;

Layout.propTypes = {
  tracksPlayer: PropTypes.element.isRequired,
  currentId: PropTypes.string.isRequired,
};
