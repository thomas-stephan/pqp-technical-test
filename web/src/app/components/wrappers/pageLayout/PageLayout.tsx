import { Box } from '@mui/material'
import React from 'react'

import ScrollTopButton from '../../common/scrollTopButton/ScrollTopButton'
import Footer from '../../navigation/footer/Footer'
import Header from '../../navigation/header/Header'
import { PageLayoutProps } from './_props'
import { sxs } from './_sxs'

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  scrollSensitive = false,
  goBackTo,
}) => {
  return (
    <Box sx={sxs.pageLayout}>
      <Header scrollSensitive={scrollSensitive} goBackTo={goBackTo} />
      <Box sx={sxs.pageLayoutContent}>{children}</Box>
      <Footer />
      <ScrollTopButton />
    </Box>
  )
}

export default PageLayout
