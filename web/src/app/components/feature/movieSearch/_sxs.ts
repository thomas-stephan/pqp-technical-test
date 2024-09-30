import { makeSx } from '../../../theme/utils'

const size = '3.5rem'

export const movieSearchPaginationSxs = makeSx({
  movieSearchPagination: {},
  movieSearchPaginationButton: {
    width: size,
    height: size,
    minWidth: 'unset',
    flexShrink: 0,
  },
})
