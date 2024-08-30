import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptmovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
    
    const dispatch = useDispatch();
    const langKey = useSelector(store => store.config.language);
    const searchText = useRef(null);
    
    //search movie in TMDB
      const searchMovieTMDB = async(movie) => {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query="+
        movie +
        "&include_adult=false&language=en-US&page=1", 
        API_OPTIONS
      );

      const json = await data.json()
      return json.results;
    };

     const handleGptSearchClick = async() => {
     // Make an API call to GPT API and get movie Results

     const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value + 
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholey, Don, Golmaal, Koi Mil Gaya";

     const gptResults = await client.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });

      if(!gptResults.choices) {
        //TODO: Write Error Handling
      }
      console.log(gptResults.choices?.[0]?.message.content);
      const gptMovies = gptResults.choices?.[0]?.message.content.split(",");

      // For each movie I will search TMDB API
     const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
     const tmdbResults = await Promise.all(promiseArray);

     dispatch(addGptmovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
     };
     

    return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center"> 
        <form 
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
        >

            <input
            ref={searchText} 
            type="text" 
            className="p-4 m-4 col-span-9" 
            placeholder={lang[langKey].gptSearchPlaceholder}
            />

            <button 
            className="py-2 px-2 m-4 bg-red-500 rounded-lg text-white col-span-3" 
            onClick={handleGptSearchClick}> 
            {lang[langKey].search}
            </button>

        </form>
    </div>
    );
};

export default GptSearchBar;