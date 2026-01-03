import React from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className="
        absolute inset-0 z-20
        flex items-center
        px-6 sm:px-12 md:px-24
        text-white
        pointer-events-none
      "
    >
      <div className="max-w-xl pointer-events-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          {title}
        </h1>

        <p className="mt-4 text-sm sm:text-base text-gray-200 line-clamp-3">
          {overview}
        </p>

        <div className="flex gap-4 mt-6">
          <button
            className="
              flex items-center gap-2
              bg-white text-black
              font-semibold
              py-2.5 px-6
              rounded-md
              hover:bg-opacity-80
              
            "
          >
            <FaPlay />
            Play
          </button>

          <button
            className="
              flex items-center gap-2
              bg-gray-500/70 text-white
              font-semibold
              py-2.5 px-6
              rounded-md
              hover:bg-gray-500
              transition
            "
          >
            <FaInfoCircle />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
