import React from "react";
import r1 from './Images/monitor.png'
import r2 from './Images/download.png'
import r3 from './Images/binoculars.png'
import r4 from './Images/review.png'

function Reasons() {
  return (
    <div className="mt-15 pl-40 ">
      <h1 className="text-2xl font-bold text-white">More reasons to join</h1>
      <div className="flex text-white mt-5 ">
        <div className="size-70 bg-gradient-to-br from-blue-800 via-blue-800 to-pink-500 rounded-2xl mr-2 md:size-85 md:min-w-50 sm:size-80 sm:min-w-55 sm:mr-7  ">
          {" "}
          <h1 className="text-2xl sm:text-[15px] ml-2 mt-5 font-bold">
            Enjoy on your TV
          </h1>{" "}
          <p className="mt-5 p-4 font-bold">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
         <div className="relative "><img className="size-17 sm:size-15 mr-2 absolute right-0" src={r1}/></div> 
        </div>
        <div className="size-70 bg-gradient-to-br from-blue-800 via-blue-800 to-pink-500 rounded-2xl mr-2 md:size-85 md:min-w-50 sm:size-80 sm:min-w-55 sm:mr-7 ">
          {" "}
          <h1 className="text-2xl sm:text-[15px] ml-2 mt-5 font-bold">
            Download your shows to watch offline
          </h1>{" "}
          <p className="mt-5 p-4 font-bold">Save your favourites easily and always have something to watch.</p>
       <div className="relative "><img className="size-16 sm:size-15 absolute right-0 mr-2" src={r2}/></div> 
        </div>
        <div className="size-70 bg-gradient-to-br from-blue-800 via-blue-800 to-pink-500 rounded-2xl mr-2 md:size-85 md:min-w-50 sm:size-80 sm:min-w-55 sm:mr-7 ">
          {" "}
          <h1 className="text-2xl sm:text-[15px] ml-2 mt-5 font-bold">Watch everywhere </h1>
          <p className="mt-5 p-4 font-bold">
            Stream unlimited movies and TV shows on your phone, tablet, laptop
            and TV.
          </p>
          <div className="relative "><img className="size-20 sm:size-15 absolute right-0 mr-2 mt-5" src={r3}/></div> 
        </div>
        <div className="size-70 bg-gradient-to-br from-blue-800 via-blue-800 to-pink-500 rounded-2xl mr-2 md:size-85 md:min-w-50 sm:size-80 sm:min-w-55 sm:mr-7 ">
          {" "}
          <h1 className="text-2xl sm:text-[15px] ml-2 mt-5 font-bold">
            Create profiles for kids
          </h1>{" "}
          <p className="mt-5 p-4 font-bold">
            Send kids on adventures with their favourite characters in a space
            made just for them — free with your membership.
          </p>
          <div className="relative "><img className="size-18 sm:size-15 absolute right-0 mr-2" src={r4}/></div> 
        </div>
      </div>
    </div>
  );
}

export default Reasons;
