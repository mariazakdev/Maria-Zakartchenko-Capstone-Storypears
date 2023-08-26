import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import authService from '../../services/authService';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();

  return (
    <Route
      {...rest}
      render={(props) => {
        // Check if the user is authenticated (token exists)
        if (authService.getToken()) {
          return <Component {...props} />;
        } else {
          // Redirect to the login page if not authenticated
          return navigate("/login");
        }
      }}
    />
  );
};

export default ProtectedRoute;