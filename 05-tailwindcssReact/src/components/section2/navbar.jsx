import React from 'react'
import { CornerDownRight } from 'lucide-react'

function navbar() {
  return (
    <div>
        <div className='flex h-20 justify-between py-5 px-10 items-center mb-20'>
            <h1 className='bg-black text-white py-2 px-4 rounded-[50px] font-mono uppercase max-sm:text-[12px]'>Market Trends</h1>
            <div className='flex justify-center items-center'>
            <CornerDownRight size={18} strokeWidth={1.25} /><button className='font-mono cursor-pointer bg-gray-200 py-2 px-6 rounded-[50px] uppercase text-sm max-sm:text-[12px]'> Digital Banking Platform</button>
            </div>
        </div>
    </div>
  )
}

export default navbar