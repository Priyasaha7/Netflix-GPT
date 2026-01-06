import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import genAi from "../utils/genAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    if (!searchText.current.value) return;

    const gptQuery =
      "Act as a movie recommendation system and suggest 10 movies for: " +
      searchText.current.value +
      ". Give only comma separated movie names.";

    const gptResults = await genAi.models.generateContent({
      model: "gemini-2.5-flash",
      contents: gptQuery,
    });

    if (!gptResults.text) return;
    // TODO: add proper error handling

    const gptMovies = gptResults.text.split(",");

    const promiseArray = gptMovies.map((movie) =>
      searchMovieTMDB(movie.trim())
    );

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({
        movieNames: gptMovies,
        movieResults: tmdbResults,
      })
    );
  };

  return (
    <div className="pt-[28%] md:pt-[10%] flex justify-center px-4">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="
          w-full md:w-1/2
          bg-black/80
          p-4
          rounded-lg
          shadow-xl
          flex
          flex-row
          gap-3
        "
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="
            flex-1
            p-3
            rounded-md
            outline-none
            text-sm
            text-white
          "
        />

        <button
          onClick={handleGptSearchClick}
          className="
            px-6
            py-3
            bg-red-700
            hover:bg-red-800
            text-white
            text-sm
            font-semibold
            rounded-md
            transition
            whitespace-nowrap
          "
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

