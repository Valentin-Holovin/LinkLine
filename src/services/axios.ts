import axios, { AxiosInstance } from 'axios';

export const BASE_URL = 'http://localhost:5000/'

const axiosInstance: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  timeout: 10000,
  baseURL: `${BASE_URL}`,
});

export default axiosInstance;
