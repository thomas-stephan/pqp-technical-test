import { createTheme } from '@mui/material'

import palette from './palette'

const theme = createTheme({
  palette: {
    primary: {
      main: palette.primary[500],
      ...palette.primary,
    },
    text: {
      primary: palette.typography[500],
    },
  },
  typography: {
    fontFamily: "'Urbanist', sans-serif",
    fontSize: 12,
    htmlFontSize: 12,
    fontWeightMedium: 700,
    fontWeightLight: 600,
    fontWeightRegular: 600,
    fontWeightBold: 800,
    allVariants: {
      color: palette.typography[500],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: '.7rem',
          textTransform: 'none',
        },
      },
    },
    MuiSkeleton: {
      variants: [
        {
          props: {
            variant: 'text',
          },
          style: {
            height: '2rem',
          },
        },
      ],
      styleOverrides: {
        root: {
          borderRadius: '.7rem',
          background: palette.surface[550],
        },
      },
    },
  },
})

export default theme
