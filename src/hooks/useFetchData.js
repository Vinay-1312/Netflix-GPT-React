import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNPMovie, addPopularMovies,addUpcomingMovies,addTopRated } from "../utils/movieSlice";
import { useEffect } from "react";
export const useFetechData = () =>
{
    const dispatchAddNowPlaying = useDispatch(addNPMovie)
    const dispatchAddPopular = useDispatch(addPopularMovies)
    const dispatch = useDispatch()
    useEffect(()=>{
        getNowPlaying();
        getPopular();
        getUpcoming();
        getTopRated();
    },[])

    const getNowPlaying = async () =>
    {
     const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options);
     const json = await data.json();
    const jsonTrailersMaps = await Promise.all( json.results.map(async (item) =>  {
    const data = await fetch("https://api.themoviedb.org/3/movie/"+item.id+"/videos?language=en-US", options)
     const json = await data.json();
     const trailer =  json?.results?.filter((item)=>item?.type==="Trailer")
     const finalTrailer =  trailer.length ? trailer[0]:json.results[0];
     item['key'] = finalTrailer?.key
     return item;
    })
    );

     dispatchAddNowPlaying(addNPMovie(json.results));
    }
    const getPopular = async () =>
    {
     const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', options);
     const json = await data.json();
     const jsonTrailersMaps = await Promise.all( json.results.map(async (item) =>  {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+item.id+"/videos?language=en-US", options)
         const json = await data.json();
         const trailer =  json?.results?.filter((item)=>item?.type==="Trailer")
         const finalTrailer =  trailer.length ? trailer[0]:json.results[0];
         item['key'] = finalTrailer?.key
         return item;
        })
        );
     dispatchAddPopular(addPopularMovies(json.results));
    }
    const getUpcoming = async () =>
    {
     const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', options);
     const json = await data.json();
     const jsonTrailersMaps = await Promise.all( json.results.map(async (item) =>  {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+item.id+"/videos?language=en-US", options)
         const json = await data.json();
         const trailer =  json?.results?.filter((item)=>item?.type==="Trailer")
         const finalTrailer =  trailer.length ? trailer[0]:json.results[0];
         item['key'] = finalTrailer?.key
         return item;
        })
        );
     dispatch(addUpcomingMovies(json.results));
    }
    const getTopRated = async () =>
    {
     const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options);
     const json = await data.json();
     const jsonTrailersMaps = await Promise.all( json.results.map(async (item) =>  {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+item.id+"/videos?language=en-US", options)
         const json = await data.json();
         const trailer =  json?.results?.filter((item)=>item?.type==="Trailer")
         const finalTrailer =  trailer.length ? trailer[0]:json.results[0];
         item['key'] = finalTrailer?.key
         return item;
        })
        );
     dispatch(addTopRated(json.results));
    }
}
 
