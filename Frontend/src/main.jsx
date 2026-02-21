import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import TurnIn from './ServicePortal/TurnIn.jsx'
import SignUp from './ServicePortal/SignUp.jsx'
import Activity from './ServicePortal/Activity.jsx'
import Captcha from './Popup.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/captcha" element={<Captcha />} />
        <Route path="/turn-in" element={<TurnIn />}></Route>
        <Route path="/sign-up">
            <Route index element={<SignUp />} />
            <Route path={"Hackathon"} element={<Activity name = "Hackathon?"/>} />
            <Route path={"Alexander"} element={<Activity name = "Hacking Alexander's computer" />} />
        </Route>
      </Routes>    
    </BrowserRouter>
  </StrictMode>,
)
