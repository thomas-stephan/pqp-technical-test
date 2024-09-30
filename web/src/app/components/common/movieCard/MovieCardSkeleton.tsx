import { Skeleton } from '@mui/material'
import React from 'react'

import { MovieCardSkeletonSxs, sxs } from './_sxs'

const MovieCardSkeleton: React.FC = () => {
  return (
    <Skeleton
      sx={[sxs.movieCard, MovieCardSkeletonSxs.skeleton]}
      variant="rounded"
    />
  )
}

export default MovieCardSkeleton
