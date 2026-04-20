import React from 'react'
import Navlinks from "./navlinks.jsx"
import Theme from "./themeChange.jsx"

const navbar = () => {
  return (
    <div className='flex justify-evenly h-40 w-full items-center'>
        <div className='text-white bg-orange-400 px-6 py-4 rounded-xl font-extrabold text-xl shadow-lg'>REACT PROJECT</div>
        <div>
            <Navlinks />
        </div>
        <div>
            <Theme />
        </div>
    </div>
  )
}

export default navbar