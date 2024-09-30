import { CssBaseline, ThemeProvider } from '@mui/material'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import AppErrorBoundaryFallback from './components/feature/appErrorBoundary/AppErrorBoundaryFallback'
import AppLoader from './components/feature/appLoader/AppLoader'
import MainRouter from './router'
import theme from './theme/theme'
import './translation/config'

function App() {
  return (
    <ErrorBoundary FallbackComponent={AppErrorBoundaryFallback}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<AppLoader />}>
          <MainRouter />
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
