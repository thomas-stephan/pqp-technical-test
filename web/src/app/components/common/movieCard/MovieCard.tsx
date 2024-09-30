import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'
import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import useIsDesktop from '../../../hooks/useIsDesktop'
import { ucfirst } from '../../../utils/strings'
import './_css.css'
import { movieCardContentDisplayProps, sxs } from './_sxs'
import { MovieCardProps } from './_types'

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  coverUrl,
  expandsOnHover = false,
}) => {
  const { t } = useTranslation()
  const { isDesktop } = useIsDesktop()

  const getPosterUrl = React.useCallback(
    (posterPath: string) => `https://image.tmdb.org/t/p/w500${posterPath}`,
    [],
  )

  return (
    <Stack
      className="movie-card"
      component={Link}
      to="#"
      sx={[
        sxs.movieCard,
        isDesktop && sxs.movieCardDesktop,
        expandsOnHover && isDesktop && sxs.movieCardExpandsOnHover,
      ]}
      gap=".4rem"
    >
      <Box
        className="movie-card-cover"
        sx={{
          background: coverUrl ? `url(${getPosterUrl(coverUrl)})` : undefined,
        }}
      />
      <Stack
        {...movieCardContentDisplayProps}
        className="movie-card-content"
        sx={sxs.movieCardContent}
      >
        <Typography
          className="movie-card-content-title"
          sx={sxs.movieCardDetailTitle}
        >
          {title}
        </Typography>
        {isDesktop ? (
          <Button
            className="movie-card-content-details-button"
            sx={sxs.movieCardDetailButton}
            color="inherit"
          >
            {ucfirst(t('movies.see_details'))}
          </Button>
        ) : (
          <IconButton>
            <KeyboardArrowRightRoundedIcon />
          </IconButton>
        )}
      </Stack>
    </Stack>
  )
}

export default MovieCard
