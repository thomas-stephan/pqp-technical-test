import { useQuery } from 'react-query'

import { language, requester } from '../api'
import { Movie, MovieCredits, UseQueryParams } from '../types'

type fetchMovieCastParams = {
  movieId: Movie['id']
}

export const fetchMovieCast = async ({ movieId }: fetchMovieCastParams) => {
  const res = await requester.get<MovieCredits>(
    `/movie/${movieId}/credits?${language}&limit=${10}`,
  )
  return res
}

export const useFetchMovieCast = (
  params: UseQueryParams<fetchMovieCastParams>,
) =>
  useQuery(
    ['useFetchMovieCast', params.variables],
    async () => {
      return await fetchMovieCast(params.variables)
    },
    {
      enabled: !params.skip,
      refetchOnWindowFocus: false,
    },
  )
