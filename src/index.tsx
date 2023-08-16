import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import './index.scss'
import App from './App'
import { ROUTE } from './route'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <HashRouter basename={ROUTE.HOME}>
    < App />
  </HashRouter >
)
