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
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'h1',
          },
          style: ({ theme }) => ({
            fontSize: '1.75rem',
            fontWeight: 800,
            [theme.breakpoints.up('md')]: {
              fontSize: '2rem',
            },
          }),
        },
        {
          props: {
            variant: 'h2',
          },
          style: ({ theme }) => ({
            fontSize: '1.4rem',
            fontWeight: 800,
            [theme.breakpoints.up('md')]: {
              fontSize: '1.6rem',
            },
          }),
        },
      ],
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
