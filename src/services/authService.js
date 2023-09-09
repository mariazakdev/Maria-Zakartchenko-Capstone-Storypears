import axios from 'axios';


const jwt = process.env.REACT_APP_JWT_COOKIE_NAME;
const BASE_URL = process.env.REACT_APP_API_URL; 
const authUrl = process.env.REACT_APP_AUTH_URL;
console.log("API URL:", process.env.REACT_APP_API_URL);
console.log("Auth URL:", process.env.REACT_APP_AUTH_URL);
console.log("JWT Key:", process.env.REACT_APP_JWT_KEY);
console.log('JWT Key:', jwt);


const authService = {

  createUser: async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/users`, userData, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },
  getUsers: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users`, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },

  getUser: async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/users/${userId}`, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  },

  login: async (email, password) => {
    try {
      await axios.post(`${BASE_URL}/login`, { email, password }, { withCredentials: true });
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  },
  updateUser: async (userId, updatedData) => {
    try {
      const response = await axios.put(`${BASE_URL}/users/${userId}`, updatedData, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  },

  

  logout: async () => {
    try {
      const response = await axios.post(`${authUrl}/logout`, {}, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  },



  getProfile: async () => {
    const token = authService.getToken();
    if (!token) {
      throw new Error('No token available');
    }
    
    try {
      const response = await axios.get(`${authUrl}/profile`, { withCredentials: true });
      console.log(response.data)

      return response.data;
    } catch (error) {
      console.error('Profile retrieval error:', error);
      throw error;
    }
  },
  updateProfile: async (userId, updatedData) => {
    try {
      const response = await axios.put(`${authUrl}/users/${userId}`, updatedData, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Profile update error:', error);
      throw error;
    }
  },
};



export default authService;
