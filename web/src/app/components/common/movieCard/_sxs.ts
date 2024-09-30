import { StackProps } from '@mui/material'

import palette from '../../../theme/palette'
import { hexToRgba, makeSx } from '../../../theme/utils'
import { movieCardListSpacing } from '../movieCardList/_sxs'

const getGapCorrection = (amount: number) =>
  parseFloat(movieCardListSpacing) / amount

export const sxs = makeSx({
  movieCard: {
    width: {
      xs: `calc(50% - ${getGapCorrection(2)}rem)`,
      md: `calc(33% - ${getGapCorrection(1.2)}rem)`,
      lg: `calc(20% - ${getGapCorrection(1.2)}rem)`,
    },
    '&:hover .movie-card-content': {
      opacity: 1,
    },
  },
  movieCardDesktop: {
    '&:hover': {
      '& .movie-card-content': {
        opacity: 1,
      },
      '& .movie-card-content-details-button': {
        transform: {
          md: 'translateY(0)',
        },
        opacity: {
          md: 1,
        },
      },
      '& .movie-card-content-title': {
        transform: {
          md: 'translateY(0)',
        },
        opacity: {
          md: 1,
        },
      },
    },
  },
  movieCardExpandsOnHover: {
    transition: {
      md: 'width .26s ease-in-out',
    },
    '&:hover': {
      width: {
        md: `calc(45% - (${movieCardListSpacing} / 2))`,
        lg: `calc(45% - (${movieCardListSpacing} / 2))`,
      },
    },
  },
  movieCardContent: {
    background: {
      md: `linear-gradient(0deg, ${hexToRgba(palette.surface[900], 0.9)} 0%, ${hexToRgba(palette.surface[900], 0.7)} 39%, transparent 100%)`,
    },
    opacity: {
      md: 0,
    },
    transition: {
      md: 'opacity .14s ease-in-out',
    },
    transitionDelay: {
      md: '.07s',
    },
  },
  movieCardDetailButton: {
    transform: {
      md: 'translateY(4.5rem)',
    },
    transition: {
      md: 'transform .115s ease-in-out, opacity .115s ease-in-out',
    },
    transitionDelay: {
      md: '.26s',
    },
    opacity: {
      md: 0,
    },
  },
  movieCardDetailTitle: {
    transform: {
      md: 'translateY(1.2rem)',
    },
    transition: {
      md: 'transform .115s ease-in-out, opacity .115s ease-in-out',
    },
    transitionDelay: {
      md: '.16s',
    },
    opacity: {
      md: 0,
    },
    fontSize: {
      xs: '.9rem',
      md: '1rem',
    },
    color: {
      md: palette.white[500],
    },
  },
})

export const MovieCardSkeletonSxs = makeSx({
  skeleton: {
    height: {
      xs: '20rem',
    },
  },
})

export const movieCardContentDisplayProps: StackProps = {
  direction: {
    xs: 'row',
    md: 'column',
  },
  alignItems: {
    xs: 'center',
    md: 'flex-start',
  },
  justifyContent: {
    xs: 'space-between',
    md: 'flex-start',
  },
  gap: '.6rem',
}
