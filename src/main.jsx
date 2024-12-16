import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import PlayerContextProvider from './Contexts/PlayerContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <PlayerContextProvider>
       <App />
    </PlayerContextProvider>
     
   
    
    </BrowserRouter>
    
  </StrictMode>,
)