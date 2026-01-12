import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice"

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth).then(() => navigate("/")).catch(() => navigate("/error"));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGPTSearchButton = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black flex items-center justify-between px-4 py-2">

      <img className="w-28 sm:w-36 cursor-pointer" src={LOGO} alt="Netflix Logo" />


      {user && (
        <div className="flex items-center gap-2">
          {showGptSearch && (
            <select
              className="bg-slate-800 text-white p-1 text-sm rounded"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleGPTSearchButton}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-sm rounded"
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>

          <img className="w-8 h-8 rounded cursor-pointer" src={user.photoURL} alt="user icon" />

      
          <button
            onClick={handleSignOut}
            className="text-white text-sm font-semibold hover:underline"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
