import axios from 'axios';

const baseURL = 'https://maps.googleapis.com';

const api = axios.create({
  baseURL
})

export default api;
