import { posterURL } from "../utils/constant";
const MovieCard = ({movie}) =>
{
    return(<div className="w-[198px] m-1 pr-2 rounded-lg cursor-pointer hover:bg-gray-600">
    <img  alt= {movie.title} src={posterURL + movie.poster_path} />
    </div>)
}
export default MovieCard;