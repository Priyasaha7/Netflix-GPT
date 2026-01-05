import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_IMG }  from "../utils/constants"

const GPTSearch = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <img
          src={BG_IMG}
          alt="Background"
          className="w-screen h-screen object-cover object-center"
        />
      </div>

      <div>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};


export default GPTSearch