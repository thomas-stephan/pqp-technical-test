import { CircularProgress, Stack } from '@mui/material'
import React from 'react'

import { AppLoaderProps } from './_props'

const AppLoader: React.FC<AppLoaderProps> = ({ fullscreen }) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        height: fullscreen ? '100dvh' : '100%',
        width: fullscreen ? '100dvw' : '100%',
        minHeight: '40dvh',
      }}
    >
      <CircularProgress />
    </Stack>
  )
}

export default AppLoader
