import { makeSx } from '../../../theme/utils'

export const sxs = makeSx({
  logo: {
    '& img': {
      width: '5rem',
      height: 'auto',
      filter: 'brightness(1)',
    },
  },
  logoSaturated: {
    '& img': {
      filter: 'brightness(100)',
    },
  },
})
