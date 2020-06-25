import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";

//props: path, component
const AuthAdminRoute = props => {
    console.log(1, props)
    const { path, Component } = props;
    return (
        <Route path={path} render={(routeProps) => {
            const isAdmin = localStorage.getItem('isAdmin');
            const accesstoken = localStorage.getItem('accesstoken');
            return (accesstoken && isAdmin) ? (
                <Component {...routeProps}/>
            ) : (
                <Redirect to="/login"/>
            )
        }} />
    )

}

export default AuthAdminRoute;