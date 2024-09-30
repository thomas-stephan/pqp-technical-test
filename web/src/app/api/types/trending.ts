import { Maybe } from '../types'
import { Movie } from './movies'

export type TrendingResponse = Maybe<{
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}>
