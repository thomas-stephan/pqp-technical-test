import { Stack, Typography } from '@mui/material'
import React from 'react'

import { defaultCardListSpacing } from '../../../theme/utils'
import { ucfirst } from '../../../utils/strings'
import MovieCard from '../movieCard/MovieCard'
import { MovieCardListProps } from './_props'
import { sxs } from './_sxs'

const MovieCardList: React.FC<MovieCardListProps> = ({
  movies,
  title,
  wrapped = false,
  expandsOnHover = false,
}) => {
  return (
    <Stack sx={sxs.MovieCardList} gap=".4rem">
      {title && <Typography fontSize="1.2rem">{ucfirst(title)}</Typography>}
      <Stack
        direction="row"
        flexWrap={wrapped ? 'wrap' : 'nowrap'}
        gap={defaultCardListSpacing}
        sx={sxs.MovieCardListContent}
      >
        {movies.map((movie) => {
          if (!movie.id || !movie.title) return null
          return (
            <MovieCard
              key={movie.id}
              title={movie.title}
              id={movie.id}
              coverUrl={movie.backdrop_path}
              expandsOnHover={expandsOnHover}
            />
          )
        })}
      </Stack>
    </Stack>
  )
}

export default MovieCardList
