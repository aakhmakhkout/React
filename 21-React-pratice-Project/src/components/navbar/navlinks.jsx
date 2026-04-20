import React from 'react'
import { Link } from 'react-router-dom'

const navlinks = () => {
  return (
    <div className='flex justify-between min-w-120 bg-orange-400 px-5 py-4 rounded-xl'>
        <Link to="/" className='text-white font-bold text-lg hover:text-purple-600 active:scale-95'>Home</Link>
        <Link to="/users" className='text-white font-bold text-lg hover:text-purple-600 active:scale-95'>Users</Link>
        <Link to="/dashboard" className='text-white font-bold text-lg hover:text-purple-600 active:scale-95'>Dashboard</Link>
        <Link to="/signin" className='text-white font-bold text-lg hover:text-purple-600 active:scale-95'>Sign In</Link>
    </div>
  )
}

export default navlinks