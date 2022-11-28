import React from "react";
import RecentlyPlayed from "../components/RecentlyPlayed";
import logo from "../assets/logo.png";
import storage from "../utils/localStorageTools";

function Profile({ handleCurrentId }) {
  const favourites = storage.get("favorite");

  return (
    <div className=" flex flex-col align-middle justify-center  dark:bg-blackCustom bg-pinkCustom w-full h-full text-white dark:text-white">
      <div className="px-6 h-full">
        <div className="flex flex-wrap mt-24 rounded-md justify-center">
          <div className="w-full relative flex flex-col items-center justify-center">
            <div className=" w-full transform absolute -translate-y-20 flex items-center justify-center">
              <img
                src={logo}
                className="z-50  shadow-xl object-cover rounded-full align-bottom border-none h-[150px] w-[150px]  min-h-[150px]  min-w-[150px]"
                alt="rousse"
              />
            </div>
            <div className="w-full mt-20 text-center ">
              <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-600 dark:text-gray-200">
                    {favourites.length}
                  </span>
                  <span className="text-sm text-slate-600 dark:text-gray-200">
                    Favourites
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <h3 className="text-2xl text-slate-600 dark:text-gray-200 font-bold leading-normal mb-1">
              Firtname Lastname
            </h3>
          </div>
          <div className="mt-6 py-6 border-t border-slate-300 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <p className="font-light leading-relaxed text-slate-600 dark:text-gray-200 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Suscipit consequuntur, natus nobis voluptate voluptatum
                  dolorum tenetur veniam fugit, aliquam quo inventore, corrupti
                  magni! Amet architecto illum ipsum in rem? Maiores.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-24">
          <RecentlyPlayed handleCurrentId={handleCurrentId} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
