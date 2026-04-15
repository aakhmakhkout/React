import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const product = () => {
  return (
    <div className='flex flex-col justify-evenly h-70 items-center'>
      <div>
      <h1 className='text-6xl font-extrabold text-white'>Products</h1>
      </div>

      <div className='w-full flex justify-evenly items-center'>
        <Link className='text-white bg-black/30 p-2 rounded-xl' to="mobile">Mobile Accessories</Link>
        <Link className='text-white  bg-black/30 p-2 rounded-xl' to="laptop">Laptop Acessories</Link>
        <Link className='text-white  bg-black/30 p-2 rounded-xl' to="kitchen"> Kitchen Accessories</Link>
      </div>
      
      <Outlet />
    </div>
  )
}

export default product