import axios from 'axios';
const BASE_URL = process.env.REACT_APP_API_URL; 


const userService = {

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
};



export default userService;