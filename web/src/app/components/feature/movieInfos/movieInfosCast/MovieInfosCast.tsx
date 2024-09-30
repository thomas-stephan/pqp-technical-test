import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { getApiImageUrl } from '../../../../api/api'
import { useFetchMovieCast } from '../../../../api/queries/fetchMovieCast'
import palette from '../../../../theme/palette'
import CardListSkeleton from '../../../common/cardListSkeleton/CardListSkeleton'
import MovieInfosSection from '../movieInfosSection/MovieInfosSection'
import './_css.css'
import { MovieInfosCastProps } from './_props'
import { sxs } from './_sxs'

const MovieInfosCast: React.FC<MovieInfosCastProps> = ({ movieId }) => {
  const { t } = useTranslation()
  const { data, isLoading, error } = useFetchMovieCast({
    variables: {
      movieId,
    },
  })

  const cast = data?.data.cast

  if (isLoading) {
    return <CardListSkeleton skeletonsHeight="16rem" />
  }

  if (error) {
    console.error({ error })
  }

  if (error || !cast) {
    return <Typography>error</Typography>
  }
  const limitedCast = cast.slice(0, 10)

  return (
    <MovieInfosSection title={t('movies.cast')}>
      <Stack
        sx={sxs.movieInfosCast}
        direction="row"
        gap="1rem"
        flexWrap="nowrap"
      >
        {limitedCast.map((staffMember) => {
          return (
            <Stack key={staffMember.id} sx={sxs.movieInfosCastCard} gap=".6rem">
              <Box
                sx={[
                  sxs.movieInfosCastCover,
                  {
                    background: staffMember.profile_path
                      ? `url(${getApiImageUrl(staffMember.profile_path, 'original')})`
                      : undefined,
                  },
                ]}
                className="card-cover"
              />
              <Stack
                key={staffMember.id}
                sx={sxs.movieInfosCastCard}
                justifyContent="flex-end"
              >
                <Typography>{staffMember.name}</Typography>
                <Typography
                  fontWeight={500}
                  fontSize="0.9rem"
                  color={palette.typography[400]}
                >
                  {staffMember.character}
                </Typography>
              </Stack>
            </Stack>
          )
        })}
      </Stack>
    </MovieInfosSection>
  )
}

export default MovieInfosCast
