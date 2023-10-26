import { useSelector } from "react-redux";

const VideoTitle = ({title,overview}) =>
{  
    return(
        <div className="w-screen pt-[20%] px-6 md:px-24 aspect-video absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
            <p className="hidden md:inline-block text-lg py-6 w-1/3">{overview}</p>
            <div className="my-2 md:m-0" > 
                <button className="text-black bg-white py-2 md:py-4 px-3 md:px-10 text-xl opacity-50 rounded-lg mx-2 font-bold hover:bg-opacity-50" >▶️ Play</button>
                <button className="text-white bg-gray-500 p-4 px-12 text-xl opacity-50 rounded-lg mx-2 font-bold">More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle;