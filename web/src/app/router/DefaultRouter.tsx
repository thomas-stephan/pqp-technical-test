import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const AppWapper = lazy(async () => {
  return await import('../components/wrappers/appWapper/AppWapper')
})
const NotFoundPage = lazy(async () => {
  return await import('../pages/NotFoundPage')
})
const HomePage = lazy(async () => {
  return await import('../pages/HomePage')
})

const DefaultRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppWapper />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
])

export default DefaultRouter
