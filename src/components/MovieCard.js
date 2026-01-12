import React from "react";
import { CDN_IMG_URL } from "../utils/constants.js";

const MovieCard = ({ posterPath }) => {

  if (!posterPath) return;

  return (
    <div className=" w-36 md:w-40 pr-3 ">
      <img src={CDN_IMG_URL + posterPath} alt="Movie card" />
    </div>
  );
};

export default MovieCard;

