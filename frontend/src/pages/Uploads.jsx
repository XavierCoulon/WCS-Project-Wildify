import React from "react";
import PropTypes from "prop-types";
import Upload from "../components/Upload";

function Uploads({ handleCurrentId }) {
  return (
    <div className="bg-[#F3E8F3] dark:bg-slate-800 w-full h-full text-black dark:text-white">
      <Upload handleCurrentId={handleCurrentId} />
    </div>
  );
}

export default Uploads;

Uploads.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
