import React from 'react'
import Navbar from "./navbar.jsx"
import Center from "./center.jsx"


const container = () => {
  return (
    <div className='w-[80%] bg-white h-[70%] rounded-2xl'>
        <Navbar />
        <Center />
    </div>
  )
}

export default container