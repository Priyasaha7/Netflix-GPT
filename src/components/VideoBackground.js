import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieID }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieID);

  return (
<div className="w-full aspect-video relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10"></div>

  {trailerVideo?.key && (
    <div className="absolute inset-0 overflow-hidden">
      <iframe
        className="absolute top-[-10%] left-[-5%] w-[110%] h-[120%] object-cover"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&iv_load_policy=3&loop=1&playlist=${trailerVideo.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  )}
</div>

  );
};

export default VideoBackground;
