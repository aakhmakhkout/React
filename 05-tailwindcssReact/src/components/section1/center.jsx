import React from 'react'
import Customer_seg from "./customer_seg.jsx"
import Cardsdiv from "./cardsdiv.jsx"
const center = () => {
  return (
    <div className='flex justify-start h-[60vh] max-md:flex-col max-md:items-center'>
        <Customer_seg />
        <Cardsdiv />
    </div>
  )
}

export default center