import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () =>
{
    return(<div>
         <div className="absolute -z-10">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/3e4ea6b3-0687-49d4-b239-72a8a8467e4d/GB-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo" /> 
            </div>
    <GPTSearchBar />
    <GPTMovieSuggestions />
        
    </div>)
}

export default GPTSearch;