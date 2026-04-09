import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div className='navbar'>
        <div className='title'>NoteForge</div>
        <div className="links">
            <Link to='/'>HOME</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default navbar