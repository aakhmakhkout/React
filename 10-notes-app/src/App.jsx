import React from 'react'
import Navbar from "./components/navbar/navbar.jsx"
import InputSection from "./components/inputSection/inputSec.jsx"

const App = () => {
  return (
    <div className='flex flex-col  h-screen w-full bg-linear-to-t from-slate-700 from-30% to-teal-800'>
      <Navbar />
      <InputSection />
    </div>
  )
}

export default App