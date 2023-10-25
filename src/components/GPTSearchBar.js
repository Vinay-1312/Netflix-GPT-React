import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/langConstat";
import { useRef } from "react";
import openai from "../utils/openAI";
import { options } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";
const GPTSearchBar = () =>
{
    const identifier = useSelector((store)=>store.config.lang)
    const query = useRef(null);
    const dispatch = useDispatch();
    const  searchMovie = async (movieName) =>
    {
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movieName +"&include_adult=false&language=en-US&page=1",options);
      const json = await data.json();
      return json.results;

    }
    const handchatgptRequest = async () =>
    {
    
    const gptQuery = "Act as a movie recommendation system and suggest some movies for the query :" + query?.current?.value + ". Only give list of 5 movies, comma seperated like the example result given ahead. Example results: Pathan, Gaddar, Sholey, Don, and  Koi Mil Gaya."
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content:gptQuery}],
      model: 'gpt-3.5-turbo',
    });
  
    
   // console.log(gptResults.choices?.[0]?.message?.content);
    const gptMovieList = gptResults.choices?.[0]?.message?.content.split(",");
    const data = gptMovieList.map((movieName=>searchMovie(movieName)));
    const tmdbResults = await Promise.all(data)
    console.log(tmdbResults);
    dispatch(addGptMovieResult({movieNames: gptMovieList,moviesResults:tmdbResults}));
    }
    
    return(<div className="pt-[10%] flex justify-center">
       
        <form onSubmit = {(e)=>e.preventDefault()} className="bg-gray-800 w-1/2 grid grid-cols-12">
            <input type="text" className="p-4 m-4 col-span-10 required"  ref={query} placeholder={lang?.[identifier].Placeholder} ></input>
            <button className="py-2 px-2 m-4 bg-red-400 rounded-lg text-white font-bold col-span-2" onClick={handchatgptRequest}>{lang?.[identifier].Search}</button>
         </form>

    </div>)
}
export default GPTSearchBar;