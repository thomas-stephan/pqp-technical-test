import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { Button, Stack } from '@mui/material'
import React from 'react'

import Logo from '../../feature/logo/Logo'
import { useNavigationStore } from '../store'
import { sxs } from './_sxs'

const Header: React.FC = () => {
  const { toggleDrawer } = useNavigationStore()

  const handleClick = () => {
    toggleDrawer(true)
  }

  return (
    <Stack direction="row" alignItems="center" sx={sxs.header}>
      <Stack direction="row" gap="1rem" alignItems="center">
        <Button
          sx={sxs.button}
          color="inherit"
          onClick={handleClick}
          variant="text"
        >
          <MenuRoundedIcon />
        </Button>
        <Logo />
      </Stack>
    </Stack>
  )
}

export default Header
