import React from "react";
import p1 from "./Images/p1.jpg";
import p2 from "./Images/p2.jpg";
import p3 from "./Images/p3.jpg";
import p4 from "./Images/p4.jpg";
import p5 from "./Images/p5.jpg";
import p6 from "./Images/p6.jpg";
import p7 from "./Images/p7.jpg";
import p8 from "./Images/p8.jpg";
import p9 from "./Images/p9.jpg";

function Gallery() {
  const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9];
  return (
    <div className="flex overflow-x-auto space-x-4 scroll-smooth w-full mt-4 ml-40 mb-4 "  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
      {images.map((src, index) => (
       <div className="relative flex-shrink-0">
       <img
          src={src}
          key={index}
          className="w-70 h-90 object-cover rounded-lg flex-shrink-0 hover:scale-110 transition duration-1000 hover:brightness-150 mr-10 ml-1  sm:w-50 sm:h-70
          md:w-43 md:h-60"
          alt={`poster-${index}`}
        />
          <span className="text-8xl sm:text-6xl md:text-7xl absolute bottom-2 left-2 text-white font-bold drop-shadow-lg opacity-80 ">{index+1}</span>
       </div>
      ))}
    
    </div>
  );
}

export default Gallery;
