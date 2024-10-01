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
  titleEnd,
  wrapped = false,
  expandsOnHover = false,
}) => {
  return (
    <Stack sx={sxs.MovieCardList} gap=".6rem">
      <Stack
        direction="row"
        gap=".5rem"
        justifyContent="space-between"
        alignItems="center"
      >
        {title && <Typography fontSize="1.3rem">{ucfirst(title)}</Typography>}
        {titleEnd && (
          <Typography fontSize=".85rem">{ucfirst(titleEnd)}</Typography>
        )}
      </Stack>
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
