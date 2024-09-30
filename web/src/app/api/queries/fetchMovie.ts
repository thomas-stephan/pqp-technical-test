import { useQuery } from 'react-query'

import { language, requester } from '../api'
import { Movie, MovieDetails, UseQueryParams } from '../types'

type fetchMovieParams = {
  movieId: Movie['id']
}

export const fetchMovie = async ({ movieId }: fetchMovieParams) => {
  const res = await requester.get<MovieDetails>(`/movie/${movieId}?${language}`)
  return res
}

export const useFetchMovie = (params: UseQueryParams<fetchMovieParams>) =>
  useQuery(
    ['useFetchMovie', params.variables],
    async () => {
      return await fetchMovie(params.variables)
    },
    {
      enabled: !params.skip,
      refetchOnWindowFocus: false,
    },
  )
