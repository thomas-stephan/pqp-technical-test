import { APP_PADDINGS } from '../../../theme/constants'
import { makeSx } from '../../../theme/utils'
import { HEADER_HEIGHT } from '../../navigation/header/_sxs'

const paddingTop = `calc(${HEADER_HEIGHT} + 1rem)`

export const sxs = makeSx({
  pageLayout: {
    width: '100dvw',
    minHeight: '100dvh',
  },
  pageLayoutContent: {
    minHeight: '100dvh',
    maxWidth: {
      xs: '100%',
      md: '75rem',
    },
    padding: {
      xs: `${paddingTop} ${APP_PADDINGS.x.xs} 5rem`,
      md: `${paddingTop} ${APP_PADDINGS.x.md} 5rem`,
    },
    margin: {
      md: '0 auto',
    },
  },
})
