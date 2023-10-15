import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
const Login = () =>
{
    const navigate = useNavigate()
    const[isSignIn,setSignIn] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);
    const password = useRef(null);
    const email = useRef(null);
    const name = useRef(null);
    const dispatchAdduser = useDispatch(addUser)
    const handleButtonClick = () =>
    {
        const message = checkValidData(password.current.value)
   
        setErrorMessage(message);
        if(message) return
        if(!isSignIn)
        {
                    //signup
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
                displayName: name.current.value
              }).then(() => {
                
                const {uid,email,displayName} = auth.currentUser;
                dispatchAdduser(addUser({
                    uid:uid,
                    email:email,
                    displayName:displayName
                }))
             
                // ...
              }).catch((error) => {
                navigate("/error");
                // ...
              });
            
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage("Unable to sign up- Email already in use");
    // ..
  });
        }
        else
        {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                //console.log("LoggedIn");
                
               

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                
                setErrorMessage("Invalid Login Credentials");
             });
        }
    }
    const handleSignInSignup = () =>
    {
        setSignIn(!isSignIn);

    }
    return(
        <div>
        <Header />
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/3e4ea6b3-0687-49d4-b239-72a8a8467e4d/GB-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo" /> 
            </div>
        <form onSubmit = {(e)=> e.preventDefault()}className=" w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
            {!isSignIn && (<input type="text"  ref={name} placeholder="Name" className="p-4 my-4 w-full bg-gray-700 rounded-lg required"></input>)}
            <input type="email" ref={email} placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 rounded-lg required"></input>
            <input type="password" ref ={password} placeholder="password" className="p-4 my-4 w-full bg-gray-700 rounded-lg required"></input>
            <p className="text-red-500 font-bold p-2">{errorMessage}</p>    
            <button className="p-4 my-4 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}> {isSignIn ? "Sign In" : "Sign up"} </button>
        <p className="p-2 m-1 cursor-pointer" onClick={handleSignInSignup}>{isSignIn ? "New to Netflix? Sign up now!" : "Already an user? Sign in Now"} </p>
        </form>

        </div>
    )
}

export default Login