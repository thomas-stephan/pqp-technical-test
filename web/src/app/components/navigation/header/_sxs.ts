import { APP_PADDINGS } from '../../../theme/constants'
import palette from '../../../theme/palette'
import { makeSx } from '../../../theme/utils'

export const HEADER_HEIGHT = '4rem'

export const sxs = makeSx({
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
    background: palette.white[500],
    zIndex: 300,
    padding: {
      xs: `.5rem ${APP_PADDINGS.x.xs}`,
      md: `.5rem ${APP_PADDINGS.x.md}`,
    },
    borderBottom: `1px solid ${palette.surface[500]}`,
  },
  button: {
    padding: 0,
    minHeight: 'unset',
    minWidth: 'unset',
  },
})
