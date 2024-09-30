import { Skeleton, Stack } from '@mui/material'
import React from 'react'

import { defaultCardListSpacing } from '../../../theme/utils'
import { CardListSkeletonProps } from './_props'
import { sxs } from './_sxs'

const CardListSkeleton: React.FC<CardListSkeletonProps> = ({
  skeletonsHeight,
  skeletonsCount = 2,
  title = true,
}) => {
  const ghosts = React.useMemo(() => {
    const res = []

    for (let index = 0; index < skeletonsCount; index++) {
      res.push({
        id: index,
      })
    }

    return res
  }, [])

  return (
    <Stack sx={sxs.cardListSkeleton} gap=".4rem">
      {title && <Skeleton sx={sxs.title} variant="text" />}
      <Stack
        direction="row"
        flexWrap={'wrap'}
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
