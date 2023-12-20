import axios from 'axios';
import TokenService from '@/service/TokenService';
export const customedAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    withCredentials: true,
  },
});

customedAxios.interceptors.request.use((config) => {
  if (TokenService.getAccessToken() !== undefined && TokenService.getId() !== undefined) {
    config.headers!.authorization = `Bearer ${TokenService.getAccessToken()}`;
  }
  return config;
});
export default customedAxios;
