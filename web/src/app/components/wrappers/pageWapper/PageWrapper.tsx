import { Box } from '@mui/material'
import React, { PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom'

import { sxs } from './_sxs'

const PageWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return <Box sx={sxs.pageWrapper}>{children ?? <Outlet />}</Box>
}

export default PageWrapper
