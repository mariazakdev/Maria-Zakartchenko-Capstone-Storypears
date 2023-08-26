import axios from 'axios';
import Cookies from 'js-cookie'; // If using js-cookie

const jwt= process.env.REACT_APP_JWT_COOKIE_NAME;
const authUrl = process.env.REACT_APP_AUTH_URL;

const authService = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${authUrl}/login`, { email, password });
      const { token } = response.data;

      // Store the token in a cookie or localStorage
      Cookies.set(jwt, token); // Using js-cookie
      // localStorage.setItem(jwtCookieName, token); // Using localStorage

      return true; // Login successful
    } catch (error) {
      console.error('Login error:', error);
      return false; // Login failed
    }
  },

  logout: () => {
    // Remove the token from the cookie or localStorage
    Cookies.remove(jwt); // Using js-cookie
    // localStorage.removeItem(jwtCookieName); // Using localStorage
  },

  getToken: () => {
    // Retrieve the token from the cookie or localStorage
    return Cookies.get(jwt); // Using js-cookie
    // return localStorage.getItem(jwtCookieName); // Using localStorage
  },
};

export default authService;
