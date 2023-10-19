import { useSelector } from "react-redux";
import lang from "../utils/langConstat";

const GPTSearchBar = () =>
{
    const identifier = useSelector((store)=>store.config.lang)
    console.log(identifier);
    return(<div className="pt-[10%] flex justify-center">
       
        <form className=" bg-gray-800 w-1/2 grid grid-cols-12">
            <input type="text" className="p-4 m-4 col-span-10" placeholder={lang?.[identifier].Placeholder}></input>
            <button className="py-2 px-2 m-4 bg-red-400 rounded-lg text-white font-bold col-span-2">{lang?.[identifier].Search}</button>
         </form>

    </div>)
}
export default GPTSearchBar;