import { useSearchParams } from "react-router-dom";
import { posterURL } from "../utils/constant";
import { useState } from "react";
import { useGetMovieTrailer } from "../hooks/useGetMovieTrailer";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer,addTrailerId } from "../utils/movieSlice";
const MovieCard = ({movie}) =>
{
    const [isHovered, setIsHovered] = useState(false);
    const movieTrailer = useSelector((store)=>store.movie.movieTrailer)
    const trailer = useSelector((store)=>store.movie.trailerVideo)
    const dispatch = useDispatch();

    
    const handleMouseEnter = () => {
      setIsHovered(true);
      dispatch(addTrailerId(movie.id));
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
      dispatch(addMovieTrailer(null));
      dispatch(addTrailerId(null));
      
    };
    const GetTrailer = () =>
    {
        
    
            return(
              
            <div className=" w-1/2 h-1/2">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${movie?.key}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1`}
              style={{
                position: 'absolute',
                width: "200px",
                height:"300px",
                zIndex: 1, // Set a lower z-index value
              }}
              frameBorder="0"
              title="Iframe"
            />
          </div>)
        
        
        
        
    }
    
    return(
    movie.poster_path &&(    
    <div
    className="w-[200px] h-[300px] m-1 pr-2 rounded-lg cursor-pointer hover:bg-gray-600"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  > 
    {isHovered ?    <GetTrailer /> : <img alt={movie.title} src={posterURL + movie.poster_path} />}
   
    
   
  </div>))
}
export default MovieCard;