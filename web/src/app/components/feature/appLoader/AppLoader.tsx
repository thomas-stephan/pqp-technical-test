import { Box, CircularProgress, Stack } from '@mui/material'
import React from 'react'

const AppLoader: React.FC = () => {
  return (
    <Box>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          height: '100dvh',
          width: '100dvw',
        }}
      >
        <CircularProgress />
      </Stack>
    </Box>
  )
}

export default AppLoader
