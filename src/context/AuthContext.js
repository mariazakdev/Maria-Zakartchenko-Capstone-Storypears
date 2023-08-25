import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios

const AuthContext = createContext();

const apiUrl = process.env.REACT_APP_API_URL;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User object or null if not authenticated

  // Function to fetch authenticated user data
  const fetchAuthenticatedUser = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/auth/profile`); 
      setUser(response.data); // Set the user data in the state
    } catch (error) {
      console.error('Error fetching authenticated user:', error);
      if (error.response) {
        console.error('Server responded with:', error.response.data);
      }
    }
  };

  useEffect(() => {
    // Check if the user is authenticated and fetch the user data
    fetchAuthenticatedUser();
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext; 
