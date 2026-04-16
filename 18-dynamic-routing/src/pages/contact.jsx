import React from 'react'
import { useNavigate } from 'react-router-dom'

const contact = () => {
  const navigate = useNavigate();
  return (
    <div className='flex justify-center flex-col items-center'>
        <h1 className='text-6xl font-extrabold text-white'>Contact Us</h1>
        <p className='text-white/70'>Email:xymoexyom@gmail.com</p>
        <div className="flex gap-2 absolute bottom-20">
      <button className=' bg-white/50 p-3 rounded-xl font-bold shadow-2xl active:scale-95' onClick={()=> {
        navigate('/')
      }}>Return to Home page</button>
      <button className='bg-white/50 p-3 rounded-xl font-bold shadow-2xl active:scale-95' onClick={()=> {
        navigate(-1);
      }}>Back</button>

        </div>
    </div>
  )
}

export default contact