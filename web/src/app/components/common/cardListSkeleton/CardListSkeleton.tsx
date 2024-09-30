import { Skeleton, Stack } from '@mui/material'
import React from 'react'

import { defaultCardListSpacing } from '../../../theme/utils'
import { CardListSkeletonProps } from './_props'
import { sxs } from './_sxs'

const CardListSkeleton: React.FC<CardListSkeletonProps> = ({
  skeletonsHeight,
}) => {
  const ghosts = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ]

  return (
    <Stack sx={sxs.cardListSkeleton} gap=".4rem">
      <Skeleton sx={sxs.title} variant="text" />
      <Stack
        direction="row"
        flexWrap={'nowrap'}
        gap={defaultCardListSpacing}
        sx={sxs.cardListSkeletonContent}
      >
        {ghosts.map((ghost) => {
          return (
            <Skeleton
              key={ghost.id}
              sx={[
                sxs.cardListSkeletonItem,
                {
                  height: skeletonsHeight,
                },
              ]}
            />
          )
        })}
      </Stack>
    </Stack>
  )
}

export default CardListSkeleton
