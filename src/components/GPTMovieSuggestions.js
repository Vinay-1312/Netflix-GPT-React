import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () =>
{
    
    const {movieNames, moviesResults} = useSelector((store)=>store.gpt);
    if(!movieNames) return <h1 className="text-red">Something went wrong</h1>
    return(
    <div className="p-4 m-4 bg-black opacity-100 text-white">
        <div>
        {movieNames.map((movieName,index)=>
        (<MovieList 
            key={movieName}
            title={movieName}
            movies={moviesResults[index]}
            />
        ))

        }
        </div>
    </div>
    );
}
export default GPTMovieSuggestions;