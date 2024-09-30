import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

import { ucfirst } from '../../../../utils/strings'
import { MovieInfosSectionProps } from './_props'

const MovieInfosSection: React.FC<MovieInfosSectionProps> = ({
  title,
  children,
}) => {
  return (
    <Stack gap=".8rem">
      {title && <Typography variant="h2">{ucfirst(title)}</Typography>}
      <Box>{children}</Box>
    </Stack>
  )
}

export default MovieInfosSection
