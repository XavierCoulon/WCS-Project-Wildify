import React from "react";
import PropTypes from "prop-types";
import UploadPicture from "./UploadPicture";

function UploadPictureModal({ albumId, onClose }) {
  return (
    <div className="container flex justify-center mx-auto">
      <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
        <div className="flex flex-col max-w-sm p-6 bg-white ">
          <span
            aria-hidden="true"
            onClick={onClose}
            className="flex justify-end cursor-pointer"
          >
            X
          </span>
          <div className="mt-4 flex">Upload Picture</div>
          <UploadPicture albumId={albumId} />
        </div>
      </div>
    </div>
  );
}

export default UploadPictureModal;

UploadPictureModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  albumId: PropTypes.string.isRequired,
};
