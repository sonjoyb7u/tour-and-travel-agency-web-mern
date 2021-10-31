import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <span style={{ color: "orange", fontSize: "20px", alignItems: "center", padding: "15px", border: "3px solid green", borderRadius: "10px", width: "100px", display: "block", margin: "0 auto" }}><strong>Loading...</strong></span>
    };
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? 
            children : 
            <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;