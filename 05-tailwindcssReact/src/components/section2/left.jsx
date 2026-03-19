import React from 'react'
import { SquareArrowOutUpRight } from 'lucide-react';

const left = () => {
  return (
    <div className='w-[40%] h-100 bg-gray-500 flex flex-col justify-around p-5 rounded-2xl'>
        <div className='flex flex-col justify-around gap-2.5'>
            <div>
                <h1 className='text-white text-4xl font-bold'>E-com market is expected to exceed <span>$300B</span> in 2027</h1>
            </div>
            <div>
                <p className='text-gray-300 text-sm text-center'> In india MEME contribution to GTeming sales Is expected to grow between 60-70% annual to roach USDSOBn by FY 2027
                </p>
            </div>
        </div>


        <div className='flex justify-around'>
            <div className='w-50 h-40 bg-blue-400 rounded-3xl relative'>
                <SquareArrowOutUpRight size={28} strokeWidth={1.5} className='absolute right-2 top-2 '/>
                <div className='text-center absolute top-10'>
                    <h1 className='text-4xl font-bold text-white'>
                        26.7%
                    </h1>
                    <p className='text-sm text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
               

            </div>
            <div className='w-50 h-40 bg-green-400 rounded-3xl relative'>
                <SquareArrowOutUpRight size={28} strokeWidth={1.5} className='absolute right-2 top-2 '/>
                <div className='text-center absolute top-10'>
                    <h1 className='text-4xl font-bold'>
                        25%
                    </h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
               

            </div>
            
        </div>
    </div>
  )
}

export default left