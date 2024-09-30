import { Skeleton, Stack } from '@mui/material'
import React from 'react'

import MovieCardSkeleton from '../movieCard/MovieCardSkeleton'
import { MovieCardListLoaderSxs, movieCardListSpacing, sxs } from './_sxs'

const MovieCardListLoader: React.FC = () => {
  const ghosts = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ]

  return (
    <Stack sx={sxs.MovieCardList} gap=".4rem">
      <Skeleton sx={MovieCardListLoaderSxs.title} variant="text" />
      <Stack
        direction="row"
        flexWrap={'nowrap'}
        gap={movieCardListSpacing}
        sx={sxs.MovieCardListContent}
      >
        {ghosts.map((ghost) => {
          return <MovieCardSkeleton key={ghost.id} />
        })}
      </Stack>
    </Stack>
  )
}

export default MovieCardListLoader
