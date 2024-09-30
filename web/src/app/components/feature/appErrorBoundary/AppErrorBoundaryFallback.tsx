import { Box, Typography } from '@mui/material'
import React from 'react'
import { type FallbackProps } from 'react-error-boundary'
import { useTranslation } from 'react-i18next'

const AppErrorBoundaryFallback: React.FC<FallbackProps> = ({ error }) => {
  const { t } = useTranslation()

  return (
    <Box>
      <Typography>{`${t('errors.an_error_occured')} ${error}`}</Typography>
    </Box>
  )
}

export default AppErrorBoundaryFallback
