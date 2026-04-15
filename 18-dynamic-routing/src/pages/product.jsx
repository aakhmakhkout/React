import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

const product = () => {
  const catagoryParam = useParams();
  console.log(catagoryParam);
  return (
    <div className='flex flex-col justify-evenly h-70 items-center'>
      <div>
      <h1 className='text-6xl font-extrabold text-white'>Products</h1>
      </div>

      <div className='w-full flex justify-evenly items-center'>
        <Link className='text-white bg-black/30 p-2 rounded-xl' to="/product/mobile">Mobile Accessories</Link>
        <Link className='text-white  bg-black/30 p-2 rounded-xl' to="/product/laptop">Laptop Acessories</Link>
        <Link className='text-white  bg-black/30 p-2 rounded-xl' to="/product/pc"> Pc Accessories</Link>
      </div>
      
    </div>
  )
}

export default product