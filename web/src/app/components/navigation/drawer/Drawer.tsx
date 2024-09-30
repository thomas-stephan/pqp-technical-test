import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { Backdrop, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'

import Logo from '../../feature/logo/Logo'
import { useNavigationReducer } from '../store'
import { sxs } from './_sxs'

const Drawer: React.FC = () => {
  const { isDrawerOpen, toggleDrawer } = useNavigationReducer()

  const handleCloseDrawer = () => {
    toggleDrawer(false)
  }

  return (
    <>
      <Stack sx={[sxs.drawer, isDrawerOpen ? sxs.drawerOpen : null]}>
        <Stack direction="row" justifyContent="flex-end" padding=".5rem 1rem">
          <IconButton onClick={handleCloseDrawer}>
            <CloseRoundedIcon />
          </IconButton>
        </Stack>
        <Stack direction="row" justifyContent="center" padding="1rem">
          <Logo />
        </Stack>
        <Stack direction="row" justifyContent="center">
          <Typography>content</Typography>
        </Stack>
      </Stack>
      <Backdrop
        sx={sxs.drawerBackdrop}
        open={isDrawerOpen}
        onClick={handleCloseDrawer}
      />
    </>
  )
}

export default Drawer
