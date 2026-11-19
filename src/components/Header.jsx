
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import {  signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import appStore from '../utils/appStore';
import { onAuthStateChanged } from "firebase/auth";

import {useDispatch} from "react-redux"
import {addUser,removeUser} from "../utils/userSlice"
import React, { useEffect } from 'react'
import { LOGO } from '../utils/constant';




const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
  navigate("/")
}).catch((error) => {
  // An error happened.
});
  }

  useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid,email,displayName,photoURL} = auth.currentUser;
          dispatch(addUser({uid:uid, email:email, displayName:displayName,photoURL:photoURL}));
      navigate("/browse")
    
    // ...
  } else {
    // User is signed out
    dispatch(removeUser())
    navigate("/")
    
    // ...
  }
});
  //unscribe when my component unmount
    return ()=> unsubscribe()
  },[])
  return (
    <div className='flex  justify-between absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-44' src={LOGO} alt='logo'/>
      {user && <div className='flex'>
        <img alt='user_icon' className='h-15  m-3 p-3' src={user?.photoURL}/>
        <button onClick={handleSignOut} className='text-white text-xl '>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header
