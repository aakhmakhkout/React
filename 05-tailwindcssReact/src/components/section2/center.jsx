import React from 'react'
import Left from "./left.jsx"
import Right from "./right.jsx"


const center = () => {
  return (
    <div className='flex justify-around items-center w-full h-130'>
        <Left />
        <Right />
    </div>
  )
}

export default center