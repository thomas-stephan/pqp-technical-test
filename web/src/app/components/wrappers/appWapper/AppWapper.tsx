import { Box } from '@mui/material'
import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'

import { sxs } from './_sxs'

const AppWapper: React.FC = () => {
  return (
    <Box sx={sxs.appWrapper}>
      <ScrollRestoration />
      <Outlet />
    </Box>
  )
}

export default AppWapper
