import { useSelector } from "react-redux";
import { useGetTrailer } from "../hooks/useGetTrailer";
const VideoBackground = ({movieID}) =>
{   

   
    const trailer = useSelector((store)=>store.movie.trailerVideo)
    useGetTrailer(movieID);
    
    return(
        <div className="">
<iframe className="w-screen h-1/2 aspect-video"  src={"https://www.youtube.com/embed/"+trailer?.key+"?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
    )
}
export default VideoBackground;