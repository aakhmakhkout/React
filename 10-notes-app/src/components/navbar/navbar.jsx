import React from 'react'

const navbar = () => {

    
  return (
    <div className='flex justify-between items-center h-15 mr-2 ml-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg'>
        <div className='w-40 pl-2'>
            <h1 className='text-3xl font-bold text-color'>Notes</h1>
        </div>

        <div className='flex w-2/4 bg-white/20 backdrop-blur-md border border-white/20 rounded-xl shadow-lg pt-1 pb-1 cursor-pointer'>
            <ul className='flex justify-evenly w-full'>
                <li className='text-white'>Home</li>
                <li className='text-white'>About me</li>
                <li className='text-white'>Portfolio</li>
            </ul>
        </div>
    </div>
  )
}

export default navbar