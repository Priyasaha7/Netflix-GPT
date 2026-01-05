import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {

  const { movieNames, movieResults} = useSelector((store) => store.gpt);
  
  if (!movieNames) return;


  return (
    <div className='bg-black text-white bg-opacity-80 mt-10'>
      <div>
        { movieNames.map((movieName, index) => (
          <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>
        ))}
      </div>
    </div>
  )
}

export default GptMovieSuggestion