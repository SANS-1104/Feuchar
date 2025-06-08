import axios from "axios";
const API = process.env.REACT_APP_API_URL;

const axiosClient = axios.create({ 
  baseURL: API,
  // withCredentials: true
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosClient;
