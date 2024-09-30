import axios from 'axios'
import axiosRateLimit from 'axios-rate-limit'
import { QueryClient } from 'react-query'

export const language = 'language=fr'

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

export const getApiImageUrl = (imagePath: string, size = 'w780') =>
  `https://image.tmdb.org/t/p/${size}${imagePath}`
