import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';


import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'


createRoot(document.getElementById('root')).render(
 
 <StrictMode>
    <App />
  </StrictMode>,

  // StrictMode only use in devlopment preioud not use production build 
  // finds problamatice old pattren
  // Alert you about outdated React code use
  // Ensure your App will stay complitiable
)
