import axios from 'axios';

const clientAxios = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/v1`,
});

export default clientAxios;
