import axios from 'axios';


const jwt = process.env.REACT_APP_JWT_KEY;
const authUrl = process.env.REACT_APP_AUTH_URL;

console.log('JWT Key:', jwt);
const authService = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${authUrl}/login`, { email, password });
      const { token } = response.data;

      // Store the token in localStorage
      localStorage.setItem(jwt, token);
      console.log('Token set in localStorage:', localStorage.getItem(jwt));
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  },

  logout: () => {
    // Remove the token from localStorage
    localStorage.removeItem(jwt);
  },

  getToken: () => {
    // Retrieve the token from localStorage
    return localStorage.getItem(jwt);
  },

  getProfile: async () => {
    try {
      const token = localStorage.getItem(jwt);
      console.log('Token:', token);
      if (!token) {
        throw new Error('No token available');
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      console.log('Headers:', headers);

      const response = await axios.get(`${authUrl}/profile`, {
        headers,
      });

      return response.data;
    } catch (error) {
      console.error('Profile retrieval error:', error);
      throw error;
    }
  },
};

export default authService;
