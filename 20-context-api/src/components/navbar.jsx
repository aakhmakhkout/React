import React from 'react'
import Navlinks from "./navlinks"

const navbar = () => {
  return (
    <div className='flex justify-between bg-cyan-600 h-15 items-center'>
        <div className='text-2xl font-extrabold text-white'>Context API</div>
        <div>
            <Navlinks />
        </div>
    </div>
  )
}

export default navbar