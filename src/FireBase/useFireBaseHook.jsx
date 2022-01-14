import { useEffect, useState } from "react";
import initalizeAuthentication from "./FireBaseInit";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

initalizeAuthentication();
const useFireBaseHook = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();
  const googleAuthProvider = new GoogleAuthProvider();
  const signInGoogle = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
          console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(()=>{
      onAuthStateChanged(auth, user=>{
          if(user){
              setUser(user)
          }
      })
  })

  const signOutGoogle = () => {
    signOut(auth)
      .then(() => {
          setUser('')
      })
      .catch((error) => {
        setError(error);
      });
  };

  return {
    signInGoogle,
    signOutGoogle,
    user,
    error,
  };
};

export default useFireBaseHook;
