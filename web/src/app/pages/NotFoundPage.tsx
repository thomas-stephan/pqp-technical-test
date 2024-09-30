import { Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

import PageLayout from '../components/wrappers/pageLayout/PageLayout'
import PageWrapper from '../components/wrappers/pageWapper/PageWrapper'
import { ucfirst } from '../utils/strings'

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation()
  return (
    <PageWrapper>
      <PageLayout>
        <Typography>{ucfirst(t('errors.error_404'))}</Typography>
      </PageLayout>
    </PageWrapper>
  )
}

export default NotFoundPage
