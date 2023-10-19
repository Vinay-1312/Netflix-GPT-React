import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import App from "../App";
const SecondaryContainer = () =>
{
    const movies = useSelector((store)=>store.movie)
    return(
        <div className="-mt-56 relative z-20 bg-black">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Popular"} movies={movies.popularMovies} />
            <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
        </div>
    )
}
export default SecondaryContainer;