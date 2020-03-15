import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";

//props: path, component
class AuthRoute extends Component {
    render() {
        const { path, Component } = this.props;
        return (
            <Route path={path} render={(routeProps) => {
                const userAccount = localStorage.getItem('account');
                const userAccessToken = localStorage.getItem('accessToken');
                if (userAccount && userAccessToken) {
                    return <Component {...routeProps} />
                }
                alert('Vui lòng Login');
                return <Redirect to="/login" />
            }} />
        )
    }
}

export default AuthRoute;