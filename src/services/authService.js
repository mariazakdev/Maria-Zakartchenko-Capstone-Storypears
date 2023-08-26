import axios from 'axios';
import Cookies from 'js-cookie'; // If using js-cookie

const jwt= process.env.REACT_APP_JWT_COOKIE_NAME;
const authUrl = process.env.REACT_APP_AUTH_URL;

const authService = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${authUrl}/login`, { email, password });
      const { token } = response.data;

      Cookies.set(jwt, token); 
      return true; 
    } catch (error) {
      console.error('Login error:', error);
      return false; 
    }
  },

  logout: () => {
    Cookies.remove(jwt); 
  },

  getToken: () => {
    return Cookies.get(jwt);
  },
};

export default authService;
