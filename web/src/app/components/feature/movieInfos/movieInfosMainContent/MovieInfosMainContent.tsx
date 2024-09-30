import { Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

import MovieInfosSection from '../movieInfosSection/MovieInfosSection'
import { MovieInfosMainContentProps } from './_props'

const MovieInfosMainContent: React.FC<MovieInfosMainContentProps> = ({
  description,
}) => {
  const { t } = useTranslation()

  return (
    <MovieInfosSection title={t('movies.description')}>
      <Typography>{description}</Typography>
    </MovieInfosSection>
  )
}

export default MovieInfosMainContent
