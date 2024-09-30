import React from 'react'
import { RouterProvider } from 'react-router-dom'

import DefaultRouter from './DefaultRouter'

const MainRouter: React.FC = () => {
  return <RouterProvider router={DefaultRouter} />
}
export default MainRouter
