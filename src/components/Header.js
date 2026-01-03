import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch(() => navigate("/error"));
  };

  useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
          navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
        // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);


  return (
<div className="absolute inset-x-0 top-0 px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between items-center">      <img
        className="w-40"
        src={LOGO}
        alt="Netflix Logo"
      />

      {user && (
        <div className="flex items-center gap-2">
          <img
            className="w-8 h-8 rounded"
            src={user.photoURL}
            alt="usericon"
          />
          <button
            onClick={handleSignOut}
            className="text-white font-semibold"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
