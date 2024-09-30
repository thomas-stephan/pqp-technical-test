import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'

import './assets/css/css/index.css'
import './assets/css/tailwind/index.css'
import App from './app/app'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
