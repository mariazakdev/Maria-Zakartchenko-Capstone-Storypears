import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios

const authUrl = process.env.REACT_APP_AUTH_URL;


const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User object or null if not authenticated

  // Function to fetch authenticated user data
  const fetchAuthenticatedUser = async () => {
    try {
      const response = await axios.get("http://localhost:8080/auth/profile"); 
      setUser(response.data); // Set the user data in the state
    } catch (error) {
      // Handle any errors here
      console.error('Error fetching authenticated user:', error);
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
