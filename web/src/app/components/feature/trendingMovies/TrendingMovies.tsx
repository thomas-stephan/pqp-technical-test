import { Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { useFetchTrendingMovies } from '../../../api/queries/fetchTrendingMovies'
import { TimeWindow } from '../../../types/common'
import { ucfirst } from '../../../utils/strings'
import CardListSkeleton from '../../common/cardListSkeleton/CardListSkeleton'
import MovieCardList from '../../common/movieCardList/MovieCardList'
import { TrendingMoviesProps } from './_props'

const TrendingMovies: React.FC<TrendingMoviesProps> = ({ timeWindow }) => {
  const { t } = useTranslation()
  const { data, isLoading, error } = useFetchTrendingMovies({
    variables: {
      page: 1,
      timeWindow,
    },
  })

  const listTitle: Record<TimeWindow, string> = {
    week: t('movies.trending_this_week'),
    day: t('movies.trending_today'),
  }

  const movies = data?.data.results ?? undefined

  if (isLoading) {
    return <CardListSkeleton />
  }

  if (!movies) {
    return <Typography>no movies</Typography>
  }
  if (error) {
    return <Typography>error</Typography>
  }

  if (movies.length === 0) {
    return <Typography>no reuslts</Typography>
  }

  return (
    <MovieCardList
      title={ucfirst(listTitle[timeWindow])}
      movies={movies}
      expandsOnHover
    />
  )
}

export default TrendingMovies
