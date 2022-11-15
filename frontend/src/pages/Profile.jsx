import React from "react";
import PropTypes from "prop-types";
import RecentlyPlayed from "../components/RecentlyPlayed";

import Upload from "../components/Upload";

function Profile({ handleCurrentId }) {
  return (
    <div className="bg-white flex flex-col align-middle justify-center  dark:bg-slate-800 w-full h-full text-black dark:text-white">
      <h1
        className="flex
      align-middle justify-center pt-8"
      >
        PROFIL
      </h1>
      <div className=" text-2.5xl h-full w-full flex flex-col flex-grow justify-center items-center border-2 border-yellow-500 m-4">
        <img
          src="../../src/assets/Rousse.jpg"
          alt=""
          className="shadow w-[300px] h-[300px] object-cover rounded-full align-middle border-none pb-4"
        />
        <h1>🔓 TonyHawk</h1>
        <h2>🔓 EyeOfTheTiger</h2>
      </div>
      <div>
        <Upload />
        <RecentlyPlayed handleCurrentId={handleCurrentId} />
      </div>
    </div>
  );
}

export default Profile;

Profile.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
