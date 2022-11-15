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
    if (width < 760) {
      setIsMenu(false);
    } else {
      setIsMenu(true);
    }
  }, [width]);

  return (
    <div className="w-screen pt-[96px] h-screen flex flex-col">
      <Navbar setIsMenu={setIsMenu} isMenu={isMenu} />
      {isMenu && <Sidebar />}

      <div
        className={`w-full bg-white dark:bg-slate-800 ${
          width < 760 ? "" : "pl-[200px]"
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
