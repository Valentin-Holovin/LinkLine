import axios, { AxiosInstance } from 'axios';

export const BASE_URL = ' https://560c-188-163-40-63.ngrok-free.app'

const axiosInstance: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  timeout: 10000,
  baseURL: `${BASE_URL}`,
});

export default axiosInstance;
