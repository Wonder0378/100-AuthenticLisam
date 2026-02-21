import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import Captcha from './Popup.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* Navigation */}
      <Header/>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/captcha" element={<Captcha />} />
      </Routes>    
    </BrowserRouter>
  </StrictMode>,
)
