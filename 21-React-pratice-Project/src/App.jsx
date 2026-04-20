import React, { useContext } from 'react'
import Navbar from "./components/navbar/navbar.jsx"
import {Route, Routes, useNavigate} from "react-router-dom"
import Home from "./pages/Home.jsx"
import Users from "./pages/users.jsx"
import Dashboard from "./pages/dashboard.jsx"
import SignIn from "./pages/signin.jsx"
import { CreateThemeContext } from './context/themeChangeContext.jsx'
import { StepBack, StepForward } from 'lucide-react'


const App = () => {
  const {theme} = useContext(CreateThemeContext);
  const navigate = useNavigate();

  return (
    <div className={theme}>
      <Navbar />
      <div className='flex w-full justify-evenly text-orange-400'>
        <div>
          <button className='active:scale-95' onClick={()=> {
            navigate(-1)
          }}>
             <StepBack size={44} strokeWidth={2.75} />  
        </button>
        </div>

        <div >
          <button className='active:scale-95' onClick={()=> {
            navigate(1)
          }}>
              <StepForward size={44} strokeWidth={2.75} />
          </button>
        </div>
      </div>

      <div className='mainContainer'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/signin" element={<SignIn />}/>
      </Routes>
      </div>
    </div>
  )
}

export default App