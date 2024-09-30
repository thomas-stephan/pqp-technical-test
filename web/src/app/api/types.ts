export type UseQueryParams<T extends object> = {
  variables: T
  skip?: boolean
}

export type Maybe<T> = Partial<T>

export type Movie = Maybe<{
  adult: boolean
  backdrop_path: string | undefined
  genre_ids: number[]
  id: number
  media_type: 'movie' | 'tv'
  original_language: string
  original_title?: string
  overview: string
  popularity: number
  poster_path: string | undefined
  release_date?: string
  title: string
  name: string
  video: boolean
  vote_average: number
  vote_count: number
}>

export type MovieSearchResult = Maybe<{
  id: number
  title: string
  release_date: string
  overview: string
  poster_path: string | undefined
}>

export type TrendingResponse = Maybe<{
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}>

export type MovieSearchResponse = Maybe<{
  page: number
  results: MovieSearchResult[]
  total_pages: number
  total_results: number
}>
