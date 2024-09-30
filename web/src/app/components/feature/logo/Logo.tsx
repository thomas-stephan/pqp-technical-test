import { Stack } from '@mui/material'
import React from 'react'

import svgSrc from '../../../../assets/logo.svg'
import { LogoProps } from './_props'
import { sxs } from './_sxs'

const Logo: React.FC<LogoProps> = ({ saturated = false }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={[sxs.logo, saturated && sxs.logoSaturated]}
    >
      <img src={svgSrc} />
    </Stack>
  )
}

export default Logo
