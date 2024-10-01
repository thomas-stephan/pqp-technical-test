import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded'
import { Button, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import useOnScrollActivation from '../../../hooks/useOnScrollActivation'
import palette from '../../../theme/palette'
import Logo from '../../feature/logo/Logo'
import { HeaderProps } from './_props'
import { sxs } from './_sxs'

const Header: React.FC<HeaderProps> = ({
  scrollSensitive = false,
  goBackTo,
}) => {
  const [isHeaderScrolled, setIsHeaderScrolled] = React.useState(false)
  useOnScrollActivation({
    onReachOver: () => {
      if (!isHeaderScrolled) {
        setIsHeaderScrolled(true)
      }
    },
    onReachUnder: () => {
      setIsHeaderScrolled(false)
    },
    enabled: scrollSensitive,
  })

  const active = isHeaderScrolled || !scrollSensitive

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={[sxs.header, active && sxs.headerScrolled]}
    >
      <Stack direction="row" gap="1rem" alignItems="center">
        {goBackTo && (
          <Button
            sx={sxs.button}
            color="inherit"
            variant="text"
            component={Link}
            to={goBackTo}
          >
            <KeyboardArrowLeftRoundedIcon
              sx={{
                fill: active ? 'inherit' : palette.white[500],
              }}
            />
          </Button>
        )}
        <Button variant="text" component={Link} to="/">
          <Logo saturated={!active} />
        </Button>
      </Stack>
    </Stack>
  )
}

export default Header
