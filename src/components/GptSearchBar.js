import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {

    const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="flex items-center bg-black/80 p-4 rounded-lg shadow-xl">
        
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="w-[420px] p-3 rounded-md outline-none text-sm"
        />

        <button
          className="ml-4 px-6 py-3 bg-red-700 hover:bg-red-800 text-white text-sm font-semibold rounded-md transition"
        >
          {lang[langKey].search}
        </button>

      </form>
    </div>
  );
};

export default GptSearchBar;
