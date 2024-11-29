// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './routes/AppRouter'
import { HashRouter } from 'react-router-dom'
import { NameProvider } from './contexts/nameContext'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <NameProvider>
    <HashRouter future ={{ 
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }}>
      <AppRouter />
    </HashRouter>
  </NameProvider>
  // </StrictMode>,
)

