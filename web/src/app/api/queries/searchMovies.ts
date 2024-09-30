import { useQuery } from 'react-query'

import { requester } from '../api'
import { MovieSearchResponse, UseQueryParams } from '../types'

type SearchMovieParams = {
  name: string
  page: number
}

export const searchMovies = async ({ name, page }: SearchMovieParams) => {
  const computedName = name.replaceAll(' ', '+')

  const res = await requester.get<MovieSearchResponse>(
    `/search/movie?limit=${100}&query=${computedName}&page=${page}`,
  )
  return res
}

export const useSearchMovies = (params: UseQueryParams<SearchMovieParams>) =>
  useQuery(
    ['searchMovies', params.variables],
    async () => {
      return await searchMovies(params.variables)
    },
    {
      enabled: !params.skip,
    },
  )
