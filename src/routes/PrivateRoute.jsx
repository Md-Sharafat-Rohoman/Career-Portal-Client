import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();

    console.log('Private Route Location:', location.pathname);

    if (loading) {
        return <progress className="progress w-56"></progress>;
    }

    if (!user) {
        return <Navigate to='/signIn' state={{ from: location.pathname }}></Navigate>
    }
    return children;
};

export default PrivateRoute;