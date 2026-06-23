import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,

  // StrictMode only use in devlopment preioud not use production build 
  // finds problamatice old pattren
  // Alert you about outdated React code use
  // Ensure your App will stay complitiable
)
