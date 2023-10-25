import { useDispatch } from "react-redux";
import { options } from "../utils/constant";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";

export const useGetTrailer = (movieID) =>
{
const dispatchAddtrailer = useDispatch(addTrailerVideo)
useEffect(
    ()=>{
        getMovieVideo()
    }
,[]);
const getMovieVideo = async () =>
{
   
    const data = await fetch("https://api.themoviedb.org/3/movie/"+movieID+"/videos?language=en-US", options)
    const json = await data.json();
    const trailer =  json?.results?.filter((item)=>item?.type==="Trailer")
    const finalTrailer =  trailer.length ? trailer[0]:json.results[0];
    dispatchAddtrailer(addTrailerVideo(finalTrailer));
    
}

}