import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Rotas from './pages/Route'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rotas />
  </StrictMode>,
)
