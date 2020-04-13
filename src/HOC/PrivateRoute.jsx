import React from 'react';
import { Route, Redirect } from "react-router-dom";

//props: path, component
const PrivateRoute = props => {

    const { path, Component } = props;
    return (
        <Route path={path} render={(routeProps) => {
            const userAccount = localStorage.getItem('account');
            const accesstoken = localStorage.getItem('accesstoken');
            if (userAccount && accesstoken) {
                return <Component {...routeProps} />
            }
            alert('Vui lòng Login');
            return <Redirect to="/login" />
        }} />
    )

}

export default PrivateRoute;