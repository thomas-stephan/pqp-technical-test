import { Box } from '@mui/material'
import React, { PropsWithChildren } from 'react'

import Drawer from '../../navigation/drawer/Drawer'
import Footer from '../../navigation/footer/Footer'
import Header from '../../navigation/header/Header'
import { sxs } from './_sxs'

const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={sxs.pageLayout}>
      <Header />
      <Drawer />
      <Box sx={sxs.pageLayoutContent}>{children}</Box>
      <Footer />
    </Box>
  )
}

export default PageLayout
