import { Maybe } from './common'

export type MovieSearchResult = Maybe<{
  id: number
  title: string
  release_date: string
  overview: string
  poster_path: string | undefined
}>

export type MovieSearchResponse = Maybe<{
  page: number
  results: MovieSearchResult[]
  total_pages: number
  total_results: number
}>
