import palette from '../../../theme/palette'
import { makeSx } from '../../../theme/utils'

export const sxs = makeSx({
  drawer: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    background: palette.surface['00'],
    transform: 'translateX(-110%)',
    opacity: 0,
    width: {
      xs: '90dvw',
      md: '22rem',
    },
    zIndex: 500,
    transition: 'transform .2s ease-in-out, opacity .2s ease-in',
  },
  drawerOpen: {
    transform: 'translateX(0)',
    opacity: 1,
  },
  drawerBackdrop: {
    zIndex: 499,
  },
})
