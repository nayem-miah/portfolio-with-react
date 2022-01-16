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
  const [isLoading, setIsLoading]=useState(true);

  const auth = getAuth();
  const googleAuthProvider = new GoogleAuthProvider();
  const signInGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
          console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      }).finally(()=>setIsLoading(false));
  };

  useEffect(()=>{
      onAuthStateChanged(auth, user=>{
          if(user){
              setUser(user)
          }else{
            setUser('')
          }setIsLoading(false)
          
      })
  })

  const signOutGoogle = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
          setUser('')
      })
      .catch((error) => {
        setError(error.message);
      }).finally(()=>setIsLoading(false));
  };

  return {
    signInGoogle,
    signOutGoogle,
    user,
    error,
    isLoading
  };
};

export default useFireBaseHook;
