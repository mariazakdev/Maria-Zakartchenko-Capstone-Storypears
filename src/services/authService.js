import axiosInstance from './axiosConfig';

const BASE_URL = process.env.REACT_APP_API_URL; 
const authUrl = process.env.REACT_APP_AUTH_URL;

console.log("API URL:", BASE_URL);
console.log("Auth URL:", authUrl);
console.log("JWT Key:", process.env.REACT_APP_JWT_KEY);

const login = async (email, password) => {
  try {
    const response = await axiosInstance.post(`${authUrl}/login`, { email, password }, { withCredentials: true });
    if (response.status === 200) {
      console.log("Authentication successful");
      return { success: true };
    } else {
      console.error("Login failed");
      return { success: false, error: "Login failed" };
    }
  } catch (error) {
    console.error("Error logging in:", error);
    return { success: false, error: error.response?.data?.message || "Something went wrong" };
  }
};

const logout = async () => {
  try {
    const response = await axiosInstance.post(`${authUrl}/logout`, {}, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};

export const isAuthenticated = async () => {
  try {
    const response = await axiosInstance.get(`${authUrl}/profile`, { withCredentials: true });
    return response.status === 200;
  } catch (error) {
    return false;
  }
}

const updateProfile = async (userId, updatedData) => {
  try {
    const response = await axiosInstance.put(`${authUrl}/users/${userId}`, updatedData, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Profile update error:', error);
    throw error;
  }
};
  
export default {
    login,
    logout,
    isAuthenticated,  
    updateProfile
}
