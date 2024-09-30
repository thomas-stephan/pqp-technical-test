import axios from 'axios'
import axiosRateLimit from 'axios-rate-limit'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
})

export const requester = axiosRateLimit(instance, {
  maxRequests: 1,
  perMilliseconds: 1000,
})

console.log({
  VITE_API_BEARER: import.meta.env.VITE_API_BEARER,
})
