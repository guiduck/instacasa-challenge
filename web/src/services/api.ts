import axios from 'axios'

//set url here
const apiUrl = 'http://localhost:3333'
// baseURL: 'https://jsonplaceholder.typicode.com'

export let isLocal = false
if (apiUrl.includes('localhost')) {
  isLocal = true
} else {
  isLocal = false
}

export const api = axios.create({
  baseURL: apiUrl
})

api.interceptors.request.use(config => {
  console.log(config);
  return config;
});