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
    const { user, loading } = useAuth();

    if (loading) {
        // return <span style={{ color: "orange", fontSize: "30px", alignItems: "center", padding: "15px", border: "3px solid green", borderRadius: "10px", width: "100px", display: "block", margin: "0 auto" }}><strong><Spinner animation="border" variant="danger" /></strong></span>
        return <h6 className="text-center text-danger fw-bold">Loading...</h6>
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