
import Header from "./Header";
import { useFetechData } from "../hooks/useFetchData";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () =>
{

    useFetechData();
    return(
        <div>
        <Header />
        <MainContainer />
        <SecondaryContainer />
    
        </div>
    )
}

export default Browse;