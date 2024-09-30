import { useQuery } from 'react-query'

import { language, requester } from '../api'
import { MovieSearchResponse, UseQueryParams } from '../types'

type SearchMovieParams = {
  name: string
  page: number
}

export const searchMovies = async ({ name, page }: SearchMovieParams) => {
  const computedName = name.replaceAll(' ', '+')

  const route = `/search/movie?query=${computedName}&page=${page}&${language}`

  const res = await requester.get<MovieSearchResponse>(route)

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
      refetchOnWindowFocus: false,
    },
  )
