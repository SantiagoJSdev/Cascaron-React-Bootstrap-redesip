
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from "../component/home/Home";  
import { initChecking } from "../actions/auth";
 import { Login } from "../component/login/Login";
 
export const AppRouter = () => {

    const started = useSelector(state => state.auth);
    const dispatch = useDispatch() 
    
      
    useEffect(() => {
        dispatch(initChecking())
    }, [dispatch])
  

    if (started.checking === 'checking') {
        return ( 
            <h1>Loading</h1>
        )
    }
    return (
        <Routes>
            {
               
                        <>
                            <Route path="/login" element={< Login />} />  
                             <Route path="/home" element={< Home />} />
                             <Route path="/*" element={ <Navigate to="/" /> } />
                        </>
               
            } 
        </Routes>
    )
}
