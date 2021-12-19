import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export function AuthProtectedRoute({isLoggedIn, ...props}) {

    if (isLoggedIn){
        return <Redirect to='/'></Redirect> 
    }

    return <Route {...props}></Route>
}