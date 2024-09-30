import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { Button, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import palette from '../../../theme/palette'
import Logo from '../../feature/logo/Logo'
import { useNavigationStore } from '../store'
import { HeaderProps } from './_props'
import { sxs } from './_sxs'

const Header: React.FC<HeaderProps> = ({ scrollSensitive = false }) => {
  const { toggleDrawer } = useNavigationStore()
  const [isHeaderScrolled, setIsHeaderScrolled] = React.useState(false)

  const active = isHeaderScrolled || !scrollSensitive

  const handleClick = () => {
    toggleDrawer(true)
  }

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        if (!isHeaderScrolled) {
          setIsHeaderScrolled(true)
        }
      } else {
        setIsHeaderScrolled(false)
      }
    }

    if (scrollSensitive) {
      window.addEventListener('scroll', handleScroll, true)
    } else {
      window.removeEventListener('scroll', handleScroll, true)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll, true)
    }
  }, [scrollSensitive])

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={[sxs.header, active && sxs.headerScrolled]}
    >
      <Stack direction="row" gap="1rem" alignItems="center">
        <Button
          sx={sxs.button}
          color="inherit"
          onClick={handleClick}
          variant="text"
        >
          <MenuRoundedIcon
            sx={{
              fill: active ? 'inherit' : palette.white[500],
            }}
          />
        </Button>
        <Button variant="text" component={Link} to="/">
          <Logo saturated={!active} />
        </Button>
      </Stack>
    </Stack>
  )
}

export default Header
