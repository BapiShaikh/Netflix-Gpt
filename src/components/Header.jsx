import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import {  signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import appStore from '../utils/appStore';




const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
  navigate("/")
}).catch((error) => {
  // An error happened.
});
  }
  return (
    <div className='flex  justify-between absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-44' src='https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAT4DsJqpLaLn4NdWj0hMqiS44NBBHsef6fJbMCXfInwFPyWRZWORRKIX6OoMypwFbV-skx1kkO0bw5qyPw4TGYECuHYwI_zw-n7CzjzEILCnaUNLQfmgkh-p1HzjExVEw9zDBrZd_di2.svg' alt='logo'/>
      {user && <div className='flex'>
        <img alt='user_icon' className='h-15  m-3 p-3' src={user?.photoURL}/>
        <button onClick={handleSignOut} className='text-white text-xl '>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header
