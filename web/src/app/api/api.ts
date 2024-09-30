import axios from 'axios'
import axiosRateLimit from 'axios-rate-limit'
import { QueryClient } from 'react-query'

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

export const queryClient = new QueryClient()
