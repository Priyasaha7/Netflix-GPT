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
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS)

        const json = await data.json();

        return json.results;

    }

    const handleGptSearchClick = async () => {
        console.log(searchText.current.value);

        const gptQuery = "Act as a movie recommendation system where you have to recommend 10 best movies for the query:" + 
    searchText.current.value + "Give me the name of the movies only in the format I specified in example. Example - movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10"

        const gptResults = await genAi.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: gptQuery,
        });

        if(!gptResults.text) return;
        //TODO : write error handelling 

        console.log(gptResults.text);
        //Padosan, Gol Maal, Jaane Bhi Do Yaaro, Chupke Chupke, Angoor

        const gptMovies = gptResults.text.split(",");
        console.log(gptMovies);
        //(5) ['Jaane Bhi Do Yaaro', ' Gol Maal', ' Chupke Chupke', ' Angoor', ' Padosan']

        // for each movie i will search TMDB API
        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
        // [Promise, Promise, Promise, Promise, Promise]

        const tmdbResults = await Promise.all(promiseArray);
        console.log(tmdbResults);
        
        dispatch(addGptMovieResult( { movieNames: gptMovies, movieResults: tmdbResults }));
        
        
    }

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="flex items-center bg-black/80 p-4 rounded-lg shadow-xl" 
      onSubmit={(e) => e.preventDefault()}>
        
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="w-[420px] p-3 rounded-md outline-none text-sm"
        />

        <button
          className="ml-4 px-6 py-3 bg-red-700 hover:bg-red-800 text-white text-sm font-semibold rounded-md transition"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>

      </form>
    </div>
  );
};

export default GptSearchBar;
