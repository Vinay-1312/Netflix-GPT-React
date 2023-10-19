
import Header from "./Header";
import { useFetechData } from "../hooks/useFetchData";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";


   
const Browse = () =>
{
    const gptValue = useSelector((store)=>store.gpt.showGPt);
    useFetechData();
    return(
        <div>
        <Header />
        
       {gptValue ? ( <GPTSearch />): (<>  <MainContainer />
        <SecondaryContainer /></>)}
      
    
        </div>
    )
}

export default Browse;