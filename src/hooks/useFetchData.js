import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNPMovie } from "../utils/movieSlice";
import { useEffect } from "react";
export const useFetechData = () =>
{
    const dispatchAddNowPlaying = useDispatch(addNPMovie)
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
     console.log(json.results);
    }
}