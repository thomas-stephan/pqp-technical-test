import { APP_PADDINGS } from '../../../theme/constants'
import palette from '../../../theme/palette'
import { makeSx } from './../../../theme/utils/utils'

export const sxs = makeSx({
  footer: {
    padding: {
      xs: `3.6rem ${APP_PADDINGS.x.xs}`,
      md: `3.6rem ${APP_PADDINGS.x.md}`,
    },
    background: palette.surface[800],
    '& *': {
      color: `${palette.surface[300]} !important`,
    },
  },

  footerItem: {
    minWidth: {
      xs: '100%',
      md: '25%',
    },
  },
  footerLinkListList: {},
  footerLinkListItem: {
    padding: 0,
  },
})
