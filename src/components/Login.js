import React, { useState } from 'react';
import Header from './Header';

const Login = () => {

  const[isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  
  return (
    <div >
      <Header />
      <div className='absolute'>
      <img
        src='https://assets.nflxext.com/ffe/siteui/vlv3/d13e2d55-5cdd-48c0-a55b-4b292d0b9889/web/IN-en-20251229-TRIFECTA-perspective_d7edcd70-4cfd-441c-858c-c5e400ed6c2b_medium.jpg'
        alt="Background"
      />
</div>
      <form className='w-3/12 absolute bg-black opacity-80 text-white my-56 mx-auto right-0 left-0 p-12'>
          <h1 className='font-bold text-3xl mb-6'>
            { isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 mb-4 w-full rounded-sm bg-gray-800 border-2 border-black"
          />
          )}

          {<input
              type="text"
              placeholder="Email"
              className="p-2 mb-4 w-full rounded-sm bg-gray-800 border-2 border-black"
            />}

          {<input
            type="Passward"
            placeholder="Passward"
            className="p-2 mb-4 w-full rounded-sm bg-gray-800 border-2 border-black"
            />}



          <p onClick={toggleSignInForm} className="cursor-pointer">
            {isSignInForm ? "New user? Sign Up" : "Already a user? Sign In"}
          </p>


     </form>
    </div>

   
  )
}

export default Login;
