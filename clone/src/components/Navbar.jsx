import React from "react";
import logo from "./Images/logo.png";
import { Languages } from "lucide-react";

function Navbar() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${logo})` }}
    >
      <div>
        <h1 className="left-40 top-5 font-bold text-5xl  text-red-700 absolute .netflix-font" >
          NETFLIX{" "}
        </h1>
      </div>
      <div className="flex items-center text-white  absolute top-5  right-40 p-2">
        <div className="flex items-center border px-4 py-1  border-sky-50 mr-4 p-1  rounded">
          <Languages size={18} className="mr-2" />
          <select className="mr-2 focus:outline-none">
            <option className="bg-black text-white">English</option>
            <option className="bg-black text-white">हिन्दी</option>
          </select>
        </div>
        <div>
          <button className="bg-red-600 px-4 py-1 rounded text-white font-semibold hover:bg-red-700">
            Sign In
          </button>
        </div>
      </div>

      <div className="absolute  w-150 ml-115 h-100 top-65">
        <div>
          <h1 className="text-5xl font-bold text-white">
            Unlimited movies, TV{" "}
          </h1>
        </div>
        <div>
          <h1 className="text-5xl font-bold text-white ml-15 mt-4">
            shows and more
          </h1>
        </div>
        <div>
          <h5 className="text-2xl font-bold text-white mt-10 ml-24">
            Starts at ₹149. Cancel at any time.
          </h5>
        </div>
        <div className="mt-10">
          <p className="text-white font-bold ml-4">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
        <div className="mt-10 ml-7">
          <input
            placeholder="Email Address"
            className="text-white border border-white mr-5 h-14 w-70 rounded bg-transparent outline-0 pl-2 font-[10px]"
          />
          <button className="text-white bg-red-700 p-4 px-12 py-3.5  rounded  font-bold text-[20px]">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
