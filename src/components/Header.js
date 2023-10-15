import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Logo } from "../utils/constant";

const Header = () =>
{
    const navigate = useNavigate();
    const user = useSelector((store)=>store.user);
    const dispatchAdduser = useDispatch(addUser);
    const dispatchRemoveuser = useDispatch(removeUser);
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
    const handleSignOut =() =>
    {
        
        signOut(auth).then(() => {
          // Sign-out successful.
          
    
        }).catch((error) => {
         navigate('/error');
        });
    }
        return(
        <div className=" flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
            <img className="w-44" src={Logo} alt="logo" />
        {user &&
        <div className="flex items-center">
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