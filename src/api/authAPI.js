import axios from 'axios';

// Define the base URL for your API
const BASE_URL = 'https://krishiaibackend-production.up.railway.app';

// @Kapil https://krishiaibackend-production.up.railway.app/api/v1/google-auth/?is_client=true&redirect=http://127.0.0.1:5500/index.html'
// // Create an axios instance with the base URL
const api = axios.create({
  baseURL: BASE_URL,
});

// Define the authApi object
const authApi = {
  // Method to send Google ID token to the backend for verification
  loginWithGoogle: async () => {
    try {
      const response = await api.get('api/v1/google-auth/?is_client=true&redirect=http://localhost:5173/dashboard/');
      const resp = response;
      return resp.data
      
    } catch (error) {
      console.error('Error logging in with Google:', error);
      throw new Error("error in login")
    }
  },


};

export default authApi;
