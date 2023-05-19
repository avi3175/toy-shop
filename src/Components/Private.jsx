import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({children}) => {
    const{user,loading}=useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div>LOADING...</div>
    }

    if(!user){
        return <Navigate to="/login" state={{from:location}} replace/>
    }
    return children
   };

export default Private;