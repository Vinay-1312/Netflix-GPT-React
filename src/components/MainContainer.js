import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () =>
{   const movies = useSelector((store)=>store.movie?.nowPlayingMovies);
    if(movies===null) return;
    const mainMovie = movies[0];

    return(
        <div className="bg-black pt-[30%] md:pt-0">
 
        <VideoTitle title={mainMovie?.title} overview={mainMovie?.overview} movieId={mainMovie?.id} />
        <VideoBackground movieID={mainMovie.id}/>
        </div>
    )
}
export default MainContainer;