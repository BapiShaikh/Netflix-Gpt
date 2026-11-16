import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true)

    const toggleSignForm = ()=>{
      setIsSignInForm(!isSignInForm)

    
    
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/12cedf4e-d9cf-4a31-b80f-7e6fbe4ef998/web/IN-en-20261109-TRIFECTA-perspective_12c44b81-de29-4047-ae67-40a52ffa45ba_large.jpg'/>
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 text-white mx-auto right-0 left-0 opacity-80 rounded-lg'>
        <h1 className='front-bolt text-3xl py-4 p-4 my-4'>{isSignInForm? "Sign In": "Sign Up"}</h1>
        {!isSignInForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' rounded-lg/>}
        <input type='text' placeholder='Email Addresss' className='p-4 my-4 w-full bg-gray-700' rounded-lg/>
        
        <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm? "Sign In": "Sign Up"}</button>
        <p className='py-4 cursore' onClick={toggleSignForm}>{isSignInForm? "New to Netflix? Sign Up Now": "Already Registred Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login
