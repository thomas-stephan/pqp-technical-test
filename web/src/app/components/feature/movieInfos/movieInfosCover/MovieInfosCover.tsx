import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

import { getApiImageUrl } from '../../../../api/api'
import './_css.css'
import { MovieInfosCoverProps } from './_props'
import { sxs } from './_sxs'

const MovieInfosCover: React.FC<MovieInfosCoverProps> = ({
  coverUrl,
  title,
}) => {
  return (
    <>
      <Box sx={sxs.MovieInfosCoverSpacer} />
      <Stack
        justifyContent="flex-end"
        sx={[
          sxs.MovieInfosCover,
          {
            background: coverUrl
              ? `url(${getApiImageUrl(coverUrl, 'original')})`
              : undefined,
          },
        ]}
        className="movie-infos-cover"
      >
        <Stack sx={sxs.MovieInfosCoverContent}>
          <Typography variant="h1" sx={sxs.MovieInfosCoverContentTitle}>
            {title}
          </Typography>
        </Stack>
      </Stack>
    </>
  )
}

export default MovieInfosCover
