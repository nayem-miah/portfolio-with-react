import React, { createContext } from "react";
import useFireBaseHook from "../FireBase/useFireBaseHook";

export const  AuthContextAPI = createContext();

const AuthContext = ({ children }) => {
  // const {children}=props;

  const allContext = useFireBaseHook();

  return (
    <AuthContextAPI.Provider value={allContext}>{children}</AuthContextAPI.Provider>
  );
};

export default AuthContext;
