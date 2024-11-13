import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import Newtodolist from './assets/newtodolist'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Newtodolist />
  </StrictMode>,
)
