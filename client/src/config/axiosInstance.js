import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://blogy-blog-six.vercel.app',
});
export const baseURL = 'https://blogy-blog-six.vercel.app'
export default axiosInstance; 
