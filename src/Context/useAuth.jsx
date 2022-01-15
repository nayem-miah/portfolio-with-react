import React, { useContext } from 'react';
import { AuthContextAPI } from './AuthContext';

const useAuth = () => {
    return useContext(AuthContextAPI)
}
    

export default useAuth;