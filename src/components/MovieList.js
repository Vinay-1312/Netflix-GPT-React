import MovieCard from "./MovieCard";

const MovieList = ({title,movies}) =>
{
    return(<div className="p-1 py-1 overflow-x-hidden">
         <h1 className="text-white py-2 font-bold text-2xl">{title}</h1>
        <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex">
        {movies?.map((item)=>(<MovieCard key={item?.id} movie={item} />))}
              {movies?.map((item)=>(<MovieCard key={item?.id} movie={item} />))}
        </div>
        </div>
    </div>)
}
export default MovieList;