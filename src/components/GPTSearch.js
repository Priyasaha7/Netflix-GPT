import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMG } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <img
          src={BG_IMG}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative w-full overflow-x-hidden">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GPTSearch;
