import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Logo, supportedLanguage } from "../utils/constant";
import { toggleGPT } from "../utils/gptSlice";
import { changLanguage } from "../utils/configSlice";
const Header = () =>
{
    const navigate = useNavigate();
    const user = useSelector((store)=>store.user);
    const dispatchAdduser = useDispatch(addUser);
    const dispatch = useDispatch()
    const dispatchRemoveuser = useDispatch(removeUser);
    const showGPtSearch = useSelector((store)=>store.gpt.showGPt)
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid,email,displayName} = user;
            
            dispatchAdduser(addUser({uid:uid,email:email,displayName:displayName})) ; // navigate to browse when user logs in
            // ...
            navigate("/browse");
        } else {
            // User is signed out
            // ...
            dispatchRemoveuser(removeUser());
            navigate("/");
          //
        }
        return () => unsubscribe();
        });},[]);
    const handleGPTSearch = () =>
    {
        dispatch(toggleGPT());
    }
    const handleLanguageChange = (e) =>
    {
        dispatch(changLanguage(e.target.value));
    }
    const handleSignOut =() =>
    {
        
        signOut(auth).then(() => {
          // Sign-out successful.
          
    
        }).catch((error) => {
         navigate('/error');
        });
    }
        return(
        <div className=" flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10  ">
            <img className="w-44 md:w-48 lg:w-56" src={Logo} alt="logo" />
        {user &&

        <div className="flex items-center">
            
           {showGPtSearch &&( <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
                {supportedLanguage.map(lang=> <option key={lang.identifier} value={lang.identifier}>{lang.Language} </option>)}
            </select>) }
            <button className="py-2 px-4 m-2 bg-purple-800 rounded-lg text-white" onClick={handleGPTSearch}>{showGPtSearch ? "Home" : "GPT Search"}</button>
            <div>

            <img className="w-12 h-12 m-2 p-1" alt="icon" src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u1.jpg" />
            <span className="text-white m-2 p-1 font-bold ">{user.displayName}</span>
            </div>
            <button onClick={handleSignOut} className="bg-red-600 h-10 p-2  text-white rounded-lg text-center"> Sign Out</button>
        </div>
        }   
        
        </div>

    )
}

export default Header;