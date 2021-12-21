import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export function ProtectedRoute({isLoggedIn, ...props}) {

    if (!isLoggedIn){
        return <Redirect to='/'></Redirect> 
    }

    return <Route {...props}></Route>
}