import React, { useRef } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { createPortal } from "react-dom";
import useOnClickOutside from "@jidayyy/useonclickoutside";
import { songsFetcher } from "../utils/axiosTools";

function RighClickMenu({ x, y, showMenu, id }) {
  const ref = useRef();

  useOnClickOutside(ref, () => !showMenu);

  const handlerDeleteTrack = async (trackId) => {
    const modale = toast.loading("Please wait...");
    songsFetcher
      .delete(trackId)
      .then(() =>
        toast.update(modale, {
          render: "All is good, track deleted",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        })
      )
      .catch(() => {
        toast.update(modale, {
          render: "Oupssss",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      });
  };

  const style = () => {
    return {
      height: 200,
      width: 150,
      borderRadius: 10,
      backgroundColor: "white",
      color: "black",
      flexDirection: "column",
      padding: 10,
      top: y,
      left: x,
      position: "fixed",
      zIndex: 1000,
      display: showMenu ? "flex" : "none",
    };
  };

  return createPortal(
    <div ref={ref} style={style()}>
      <span
        aria-hidden="true"
        className="cursor-pointer"
        onClick={() => handlerDeleteTrack(id)}
      >
        &#x1F5D1;
      </span>
    </div>,
    document.body
  );
}

export default RighClickMenu;

RighClickMenu.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  showMenu: PropTypes.bool.isRequired,
};
