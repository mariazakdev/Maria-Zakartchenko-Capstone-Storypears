import axios from 'axios';


const jwt = process.env.REACT_APP_JWT_COOKIE_NAME;
const authUrl = process.env.REACT_APP_AUTH_URL;
console.log("API URL:", process.env.REACT_APP_API_URL);
console.log("Auth URL:", process.env.REACT_APP_AUTH_URL);


// const authService = {

//   login: async (email, password) => {
//     try {
//       const response = await axios.post(`${authUrl}/login`, { email, password }, { withCredentials: true });
//       return true;
//     } catch (error) {
//       console.error('Login error:', error);
//       return false;
//     }
//   },

//   logout: async () => {
//     // Call the backend endpoint to clear the HttpOnly cookie and perform other logout operations.
//     try {
//       const response = await axios.post(`${authUrl}/logout`, {}, { withCredentials: true });
//       return response.data;
//     } catch (error) {
//       console.error('Logout error:', error);
//       throw error;
//     }
//   },

//   getProfile: async () => {
//     const token = authService.getToken();
//     if (!token) {
//       throw new Error('No token available');
//     }
    
//     try {
//       const response = await axios.get(`${authUrl}/profile`, { withCredentials: true });
//       console.log(response.data)

//       return response.data;
//     } catch (error) {
//       console.error('Profile retrieval error:', error);
//       throw error;
//     }
//   },

  
//   updateProfile: async (userId, updatedData) => {
//     try {
//       const response = await axios.put(`${authUrl}/users/${userId}`, updatedData, { withCredentials: true });
//       return response.data;
//     } catch (error) {
//       console.error('Profile update error:', error);
//       throw error;
//     }
//   },
// };
const user = {
  id: 61,
  pen_first_name: "Billy",
  pen_last_name: "Writer"
};
const authService = {
  getProfile: async () => {
    return user;
  },
  isAuthenticated: () => {
    return true;
  }
};

export default authService;
export { user };