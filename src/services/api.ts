import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-gateway-homolog.azure-api.net/v1/',
});

export default api; 