import { Divider } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

import { useFetchMovie } from '../api/queries/fetchMovie'
import AppLoader from '../components/feature/appLoader/AppLoader'
import MovieInfosCast from '../components/feature/movieInfos/movieInfosCast/MovieInfosCast'
import MovieInfosCover from '../components/feature/movieInfos/movieInfosCover/MovieInfosCover'
import MovieInfosMainContent from '../components/feature/movieInfos/movieInfosMainContent/MovieInfosMainContent'
import TrendingMovies from '../components/feature/trendingMovies/TrendingMovies'
import PageLayout from '../components/wrappers/pageLayout/PageLayout'
import PageLayoutContent from '../components/wrappers/pageLayout/PageLayoutContent'
import PageWrapper from '../components/wrappers/pageWapper/PageWrapper'
import { updatePageAttributes } from '../utils/page'
import NotFoundPage from './NotFoundPage'

const HomePage: React.FC = () => {
  const { id } = useParams()

  const skiped = id === undefined
  const movieId = parseInt(id ?? '0')

  const { data, isLoading, error } = useFetchMovie({
    variables: {
      movieId,
    },
    skip: skiped,
  })

  const movie = data?.data

  React.useEffect(() => {
    updatePageAttributes({
      title: movie?.title,
      description: movie?.overview,
    })
  }, [movie])

  if (error) {
    console.error({
      error,
    })
  }

  if (isLoading) {
    return (
      <PageWrapper>
        <PageLayout scrollSensitive goBackTo="/movies">
          <MovieInfosCover title={''} />
          <AppLoader />
        </PageLayout>
      </PageWrapper>
    )
  }

  if (!movie || !movie?.title || error) return <NotFoundPage />

  return (
    <PageWrapper>
      <PageLayout scrollSensitive goBackTo="/movies">
        <MovieInfosCover title={movie?.title} coverUrl={movie.poster_path} />
        {isLoading ? (
          <AppLoader />
        ) : (
          <PageLayoutContent goBackTo="/movies">
            <MovieInfosMainContent description={movie.overview} />
            <MovieInfosCast movieId={movieId} />
            <Divider />
            <TrendingMovies timeWindow="day" />
            <TrendingMovies timeWindow="week" />
          </PageLayoutContent>
        )}
      </PageLayout>
    </PageWrapper>
  )
}

export default HomePage
