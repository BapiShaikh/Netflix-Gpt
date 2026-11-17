import React, { useRef, useState ,useNa} from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile  } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import {addUser} from "../utils/userSlice"



const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isSignInForm,setIsSignInForm] = useState(true)
  const [errorMessage,setErrorMessage] = useState(null)
  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

    const toggleSignForm = ()=>{
      setIsSignInForm(!isSignInForm)   
  }
  const handleButtonClick = ()=>{
    // validatye the from data
    const message = checkValidData(email.current.value,password.current.value);
    setErrorMessage(message);
    if(message) return
    
    if(!isSignInForm){
      // sign Up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value,name.current.value)
       .then((userCredential) => {
    // Signed up 
        const user = userCredential.user;

        updateProfile(user, {
  displayName: name.current.value, photoURL: "https://media.licdn.com/dms/image/v2/D5603AQEttsx7mUCXRA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1703655034284?e=1796256000&v=beta&t=PsPzjPyYsaXx6V48VygiWZ9LMxLmE1gVnYHhU8if3n8"
}).then(() => {
  // Profile updated!
  const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(addUser({uid:uid, email:email, displayName:displayName,photoURL:photoURL}));
  navigate("/browse")
   
  // ...
}).catch((error) => {
  // An error occurred
  setErrorMessage(error.message)
  // ...
});

        console.log(user);
       
        
    // ...
      })
    .catch((error) => {
       const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " " + errorMessage);
    // ..
      });

    }else{

              signInWithEmailAndPassword(auth, email.current.value,password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            navigate("/browse")
            
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " "+ errorMessage)
          });
    }
    
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/12cedf4e-d9cf-4a31-b80f-7e6fbe4ef998/web/IN-en-20261109-TRIFECTA-perspective_12c44b81-de29-4047-ae67-40a52ffa45ba_large.jpg'/>
      </div>
      <form 
      onSubmit={(e)=>e.preventDefault()}
      className='w-3/12 absolute p-12 bg-black my-36 text-white mx-auto right-0 left-0 opacity-80 rounded-lg'>
        <h1 className='front-bolt text-3xl py-4 p-4 my-4'>{isSignInForm? "Sign In": "Sign Up"}</h1>
        {!isSignInForm && <input type='text' ref={name} placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' rounded-lg/>}
        <input 
        ref={email}
        type='text'
         placeholder='Email Addresss' 
         className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
        
        <input
        ref={password}
        type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>

        <h3 className="text-red-500 font-bold text-lg p-2">{errorMessage}</h3>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm? "Sign In": "Sign Up"}</button>
        <p className='py-4 cursore' onClick={toggleSignForm}>{isSignInForm? "New to Netflix? Sign Up Now": "Already Registred Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login
