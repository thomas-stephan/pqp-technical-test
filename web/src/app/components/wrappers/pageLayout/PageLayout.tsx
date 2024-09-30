import { Box } from '@mui/material'
import React from 'react'

import Drawer from '../../navigation/drawer/Drawer'
import Footer from '../../navigation/footer/Footer'
import Header from '../../navigation/header/Header'
import { PageLayoutProps } from './_props'
import { sxs } from './_sxs'

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  scrollSensitive = false,
}) => {
  return (
    <Box sx={sxs.pageLayout}>
      <Header scrollSensitive={scrollSensitive} />
      <Drawer />
      <Box sx={sxs.pageLayoutContent}>{children}</Box>
      <Footer />
    </Box>
  )
}

export default PageLayout
