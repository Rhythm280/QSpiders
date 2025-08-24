import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import GlobalContext from './globalContext/GlobalContext'

createRoot(document.getElementById('root')).render(
  <GlobalContext>
    <App />
  </GlobalContext>,
)
