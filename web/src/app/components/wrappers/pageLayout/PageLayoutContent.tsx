import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded'
import { Button, Stack } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { ucfirst } from '../../../utils/strings'
import { PageLayoutContentProps } from './_props'

const PageLayoutContent: React.FC<PageLayoutContentProps> = ({
  children,
  goBackTo,
}) => {
  const { t } = useTranslation()
  return (
    <Stack paddingTop="3rem" gap={'2.5rem'}>
      {goBackTo && (
        <Stack>
          <Button
            component={Link}
            to={goBackTo}
            color="inherit"
            startIcon={<ArrowLeftRoundedIcon />}
          >
            {ucfirst(t('global.go_back'))}
          </Button>
        </Stack>
      )}
      <Stack gap="4rem">{children}</Stack>
    </Stack>
  )
}

export default PageLayoutContent
