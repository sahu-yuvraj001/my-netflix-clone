import React from "react";

function Border() {
  return (
    <div
      className="w-full relative  h-25 bg-black/90 border-4 border-l-0 border-r-0 border-b-0   border-t-red-400"
      style={{
        borderImage: "linear-gradient(to right, #ec4899, #f97316) 1",

        borderLeft: "0",
        borderRight: "0",
        borderBottom: "0",
      }}
    >
        <div
    className="absolute top-0 left-0 w-full h-6 bg-sky-400/60  blur-md"
    style={{
      borderTopLeftRadius: "50% 100%",
      borderTopRightRadius: "50% 100%",
    }}
  ></div>
      <h1 className="absolute left-40 font-bold text-2xl text-white top-15">
        Trending Now
      </h1>
    </div>
  );
}

export default Border;
