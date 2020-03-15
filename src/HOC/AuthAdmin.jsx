import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";

//props: path, component
class AuthAdminRoute extends Component {
    render() {
        const { path, Component } = this.props;
        return (
            <Route path={path} render={(routeProps) => {
                const userAdmin = localStorage.getItem('isAdmin');
                const userAccessToken = localStorage.getItem('accessToken');
                if (userAdmin && userAccessToken) {
                    return <Component {...routeProps} />
                }
                alert('NO_PERMISSION');
                return <Redirect to="/home" />
            }} />
        )
    }
}

export default AuthAdminRoute;