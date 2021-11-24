import React from 'react';
import {   
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation 
} from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <span style={{ color: "orange", fontSize: "30px", alignItems: "center", padding: "20px 30px", border: "3px solid green", borderRadius: "10px", width: "100px", display: "block", margin: "0 auto" }}><strong><Spinner animation="border" variant="warning" /></strong></span>
    };
    
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect to={{ pathname: "/login", state: { from: location } }}
            ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;