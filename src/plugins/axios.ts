import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-blog-backend-production-197d.up.railway.app/api',
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
