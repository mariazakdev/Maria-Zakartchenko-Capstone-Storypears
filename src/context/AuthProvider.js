import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import authService from '../services/authService'; // Import authService

const authUrl = process.env.REACT_APP_AUTH_URL;

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User object or null if not authenticated

  // Function to fetch authenticated user data
  const fetchAuthenticatedUser = async () => {
    try {
      const token = authService.getToken(); // Get the JWT token from authService

      if (token) {
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await axios.get(`${authUrl}/profile`, { headers });
        setUser(response.data); // Set the user data in the state
      } else {
        // Handle the case where there's no token (user not authenticated)
        setUser(null); // Clear the user data
      }
    } catch (error) {
      // Handle any errors here
      console.error('Error fetching authenticated user:', error);
    }
  };

  useEffect(() => {
    fetchAuthenticatedUser();
  }, []); 

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};
