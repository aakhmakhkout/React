import React from 'react'
import { ArrowRight } from 'lucide-react';

const cards = (props) => {
  return (
    <div className='h-full overflow-hidden w-80 relative rounded-2xl shrink-0'>
                <img src={props.image} alt="img" className='w-full h-full object-cover brightness-60'/>
           
            <div className='absolute top-0 left-0 flex flex-col justify-between h-full w-full'>
                <h1 className='text-black bg-white px-2 m-2 rounded-[50%] h-10 w-10 flex justify-center items-center font-bold'>{props.number}</h1>
            

                <div>
                <p className='text-white leading-normal p-3 font-sans'>{props.review}</p>

                    <div className='flex justify-between p-5 '>
                    <h1 className='text-white bg-blue-400 py-1.5 px-5 rounded-2xl text-center text-base w-25'>{props.overall}</h1>
                    <button className='text-white bg-blue-400 rounded-full p-2 cursor-pointer' ><ArrowRight size={20} strokeWidth={2.5} /></button>

                    </div>
                </div>
                
          
              
               
              
               
            
          </div> 
        </div>
  )
}

export default cards