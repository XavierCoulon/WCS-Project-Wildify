import React from "react";
import Upload from "../components/Upload";

function Uploads({ handleCurrentId }) {
  return (
    <div className="bg-pinkCustom dark:bg-blackCustom w-full h-full">
      <Upload handleCurrentId={handleCurrentId} />
    </div>
  );
}

export default Uploads;
