import { Stack } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

import { useFetchMovie } from '../api/queries/fetchMovie'
import AppLoader from '../components/feature/appLoader/AppLoader'
import MovieInfosCast from '../components/feature/movieInfos/movieInfosCast/MovieInfosCast'
import MovieInfosCover from '../components/feature/movieInfos/movieInfosCover/MovieInfosCover'
import MovieInfosMainContent from '../components/feature/movieInfos/movieInfosMainContent/MovieInfosMainContent'
import PageLayout from '../components/wrappers/pageLayout/PageLayout'
import PageWrapper from '../components/wrappers/pageWapper/PageWrapper'
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

  if (error) {
    console.error({
      error,
    })
  }

  const movie = data?.data

  if ((!isLoading && !movie) || !movie?.title || error) return <NotFoundPage />

  return (
    <PageWrapper>
      <PageLayout scrollSensitive>
        <MovieInfosCover title={movie?.title} coverUrl={movie.poster_path} />
        {isLoading ? (
          <AppLoader />
        ) : (
          <Stack gap="2rem" paddingTop="3rem">
            <MovieInfosMainContent description={movie.overview} />
            <MovieInfosCast movieId={movieId} />
          </Stack>
        )}
      </PageLayout>
    </PageWrapper>
  )
}

export default HomePage
