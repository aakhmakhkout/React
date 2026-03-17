import React from 'react'
import { ArrowUpRight } from 'lucide-react'
function customer_seg() {
  return (
    <div className='w-[30rem] max-md:w-[40rem] max-md:h-[30vh] max-sm:w-[30rem] h-full flex flex-col justify-between'>
      <div className='py-10 px-10'>
        <h3 className='text-[50px] font-bold bg-gray-200 p-2 text-center rounded-[20px] leading-[1.1]'>
        
            Prospective customer segmentation
        </h3>
        <p className='text-center py-2'>
            Depending on customer satisfaction and access to banking products, potential target audionce can be divided into three groups. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illum necessitatibus magni nam dolores, voluptate maiores aperiam voluptas repellendus quos quam asperiores soluta impedit animi nesciunt at ipsam optio alias.
        </p>
      </div>
        <button className='px-10'><ArrowUpRight size={44} strokeWidth={2.25} /></button>
    </div>
  )
}

export default customer_seg