import { CssBaseline, ThemeProvider } from '@mui/material'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { QueryClientProvider } from 'react-query'

import { queryClient } from './api/api'
import AppErrorBoundaryFallback from './components/feature/appErrorBoundary/AppErrorBoundaryFallback'
import AppLoader from './components/feature/appLoader/AppLoader'
import MainRouter from './router'
import theme from './theme/theme'
import './translation/config'

function App() {
  return (
    <ErrorBoundary FallbackComponent={AppErrorBoundaryFallback}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <Suspense fallback={<AppLoader fullscreen />}>
            <MainRouter />
          </Suspense>
        </QueryClientProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
