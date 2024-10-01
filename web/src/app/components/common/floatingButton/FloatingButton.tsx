import { Button } from '@mui/material'
import React from 'react'

import palette from '../../../theme/palette'
import { hexToRgba } from '../../../theme/utils'
import { FloatingButtonProps } from './_props'
import { sxs } from './_sxs'

const FloatingButton: React.FC<FloatingButtonProps> = ({
  children,
  onClick,
  position,
  opacity = 0.7,
}) => {
  return (
    <Button
      color="inherit"
      onClick={onClick}
      sx={[
        sxs.floatingButton,
        {
          ...position,
          background: hexToRgba(palette.surface[700], opacity),
        },
      ]}
    >
      {children}
    </Button>
  )
}

export default FloatingButton
