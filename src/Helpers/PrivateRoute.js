import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

function authenticate() {
    const token = localStorage.getItem("usertoken");
    if(token) {
        const decodedToken = jwt_decode(token);
        if(decodedToken.exp * 1000 < Date.now()) {
            return 0;
        } else {
            return 1;
        }
    } else {
        return 0;
    }
}

export const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route
        {...rest}
        render= {props => 
            authenticate() ? (
                <Component {...props} />
            ) : (
                <Redirect 
                    to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);