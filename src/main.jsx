import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'
import { onCLS, onINP, onLCP } from 'web-vitals'
import './index.css'
import App from './App.jsx'

onCLS(console.log)
onINP(console.log)
onLCP(console.log)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ReactLenis root options={{ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) }}>
        <App />
      </ReactLenis>
    </BrowserRouter>
  </StrictMode>
)
