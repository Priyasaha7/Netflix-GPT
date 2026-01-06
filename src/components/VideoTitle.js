import React from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className="
        absolute inset-0 z-20
        flex
        items-end sm:items-center md:items-start
        px-4 sm:px-10 md:px-16
        pb-24 sm:pb-0
        text-white
        pointer-events-none
      "
    >
      <div
        className="
          w-full
          text-center sm:text-left
          sm:mt-0 md:mt-40
          max-w-xl
          pointer-events-auto
        "
      >
        {/* TITLE */}
        <h1 className="
          text-2xl sm:text-4xl md:text-5xl
          font-extrabold
          leading-tight
        ">
          {title}
        </h1>

        {/* DESCRIPTION */}
        <p className="
          hidden sm:block
          mt-3
          text-sm sm:text-base
          text-gray-200
          max-w-md
          line-clamp-3
        ">
          {overview}
        </p>

        {/* BUTTONS */}
        <div className="
          mt-5
          flex
          justify-center sm:justify-start
          gap-3
        ">
          <button
            className="
              flex items-center gap-2
              bg-white text-black
              font-semibold
              py-2 px-5 sm:px-6
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
              py-2 px-5 sm:px-6
              rounded-md
              hover:bg-gray-500
            "
          >
            <FaInfoCircle />
            Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;

