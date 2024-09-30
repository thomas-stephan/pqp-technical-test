import { useQuery } from 'react-query'

import { TimeWindow } from '../../types/common'
import { requester } from '../api'
import { TrendingResponse, UseQueryParams } from '../types'

type fetchTrendingMovieParams = {
  page: number
  timeWindow: TimeWindow
}

export const fetchTrendingMovies = async ({
  page,
  timeWindow,
}: fetchTrendingMovieParams) => {
  const res = await requester.get<TrendingResponse>(
    `/trending/movie/${timeWindow}?language=en-US&page=${page}`,
  )
  return res
}

export const useFetchTrendingMovies = (
  params: UseQueryParams<fetchTrendingMovieParams>,
) =>
  useQuery(
    ['useFetchTrendingMovies', params.variables],
    async () => {
      return await fetchTrendingMovies(params.variables)
    },
    {
      enabled: !params.skip,
      refetchOnWindowFocus: false,
    },
  )
