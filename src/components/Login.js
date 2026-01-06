import React, { useState, useRef,  } from 'react';
import Header from './Header';
import checkValidate from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.js';
import { USER_AVATAR, BG_IMG } from '../utils/constants.js';

const Login = () => {

  const dispatch = useDispatch();

  const[isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);


  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  
  const handleButtonClick = () => {
    // Validate the data
    //check if it matches the criteria 

    // console.log(email);
    // console.log(passward);
    const nameValue = !isSignInForm ? fullName.current?.value : null;

    const message = checkValidate( email.current.value, password.current.value, nameValue, isSignInForm);
    // console.log(message);
    setErrorMessage(message);

    if(message) return;

    if(!isSignInForm){
      // Sign Up Logic
       createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
           updateProfile(user, {
            displayName: nameValue,
            photoURL: USER_AVATAR,
          }).then(() => {
          });
        })


        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          
        });

    }else{
      //Sign In/Log In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const {user} = userCredential.user;
          //console.log(user);
          dispatch(addUser(user));
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
    }

  
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  
  return (
    <div >
      <Header />
      <div className='absolute'>
        <img className='h-screen object-cover md:h-full '
          src={BG_IMG}
          alt="Background"
        />
      </div>
      <form  onSubmit={(e) => e.preventDefault()} className=' w-3/4 md:w-3/12 absolute bg-black opacity-90 text-white my-56 mx-auto right-0 left-0 p-12 rounded-lg'>
          <h1 className='font-bold text-3xl mb-6'>
            { isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
          <input
            ref={fullName }
            type="text"
            placeholder="Full Name"
            className="p-2 mb-4 w-full rounded-sm bg-gray-800 border-2 border-black"
          />
          )}

          {<input
              ref={email}
              type="email"
              placeholder="Email"
              className="p-2 mb-4 w-full rounded-sm bg-gray-800 border-2 border-black"
            />}

          {<input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 mb-4 w-full rounded-sm bg-gray-800 border-2 border-black"
            />}

          <p className='text-red-700 font-semibold'>{errorMessage}</p>

          <button type="submit" className="p-2 my-4 w-full bg-red-700 rounded-lg" onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p onClick={toggleSignInForm} className="cursor-pointer">
            {isSignInForm ? "New user? Sign Up" : "Already a user? Sign In"}
          </p>


     </form>
    </div>

   
  )

}
export default Login;
