import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNPMovie, addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
export const useFetechData = () =>
{
    const dispatchAddNowPlaying = useDispatch(addNPMovie)
    const dispatchAddPopular = useDispatch(addPopularMovies)
    useEffect(()=>{
        getNowPlaying();
        getPopular();
    },[])

    const getNowPlaying = async () =>
    {
     const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options);
     const json = await data.json();
    
     dispatchAddNowPlaying(addNPMovie(json.results));
    }
    const getPopular = async () =>
    {
     const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', options);
     const json = await data.json();
     dispatchAddPopular(addPopularMovies(json.results));
    }
    const getUpcoming = async () =>
    {
     const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', options);
     const json = await data.json();
     dispatchAddPopular(addPopularMovies(json.results));
    }
}