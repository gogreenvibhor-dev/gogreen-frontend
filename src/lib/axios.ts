import axios from 'axios';

// Create axios instance with default configuration
// Using relative path so requests go through Next.js proxy (same-origin)
const axiosInstance = axios.create({
  baseURL: '/api',
  withCredentials: true,
  // Note: Do NOT set a default Content-Type header here.
  // Axios automatically sets 'application/json' for plain objects
  // and 'multipart/form-data' (with boundary) for FormData.
  // Setting a default Content-Type breaks FormData uploads.
});

// Add response interceptor for better error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized - could redirect to login
      console.warn('Unauthorized request:', error.config?.url);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
