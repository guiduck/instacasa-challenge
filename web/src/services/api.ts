import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

api.interceptors.request.use(config => {
  console.log(config);
  return config;
});