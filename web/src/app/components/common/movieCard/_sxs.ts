import { StackProps } from '@mui/material'

import palette from '../../../theme/palette'
import {
  defaultCardListSpacing,
  getGapCorrection,
  hexToRgba,
  makeSx,
} from '../../../theme/utils'

export const sxs = makeSx({
  movieCard: {
    width: {
      xs: `calc(50% - ${getGapCorrection(parseFloat(defaultCardListSpacing), 2)})`,
      md: `calc(33% - ${getGapCorrection(parseFloat(defaultCardListSpacing), 1.2)})`,
      lg: `calc(25% - ${getGapCorrection(parseFloat(defaultCardListSpacing), 1.2)})`,
    },
    '&:hover .movie-card-content': {
      opacity: 1,
    },
  },
  movieCardCover: {
    height: '20rem',
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
        md: `calc(45% - (${defaultCardListSpacing} / 2))`,
        lg: `calc(45% - (${defaultCardListSpacing} / 2))`,
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
    position: {
      xs: 'static',
      md: 'absolute',
    },
    paddingTop: {
      md: '4rem !important',
    },
  },
  movieCardDetailButton: {
    transform: {
      md: 'translateY(4.5rem)',
    },
    transition: {
      md: 'transform .115s ease-in-out, opacity .115s ease-in-out, background .12s ease-in',
    },
    transitionDelay: {
      md: '.26s',
    },
    opacity: {
      md: 0,
    },
    color: {
      md: palette.white[500],
    },
    background: hexToRgba(palette.surface[600], 0.6),
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
      md: '1.2rem',
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
