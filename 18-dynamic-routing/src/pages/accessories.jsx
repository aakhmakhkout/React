import React, { useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

const Accessories = [{acs:  {
    id : "mobile",
    acs1 : "covers",
    acs2 : "chargers",
    acs3 : "earphones"
}}, { acs : {
    id : "laptop",
    acs1 : "stand",
    acs2 : "usb hub",
    acs3 : "keyboard",
    acs4 : "mouse"
}}, { acs : {
    id : "pc",
    acs1 : "keyboard",
    acs2 : "mouse",
    acs3 : "Cpu",
    acs4 : "motherboard",
    acs5 : "ram",
    acs6 : "ssd"
}}] 



const accessories = (prop) => {
let arr = [];
 const result = Accessories.find((values)=> {
    return values.acs.id === prop.catagory
 })

 const Components = () => {
    arr = Object.values(result.acs).slice(1)
    
    return <div className='bg-white/20 w-150 flex justify-between items-center h-14 backdrop-blur-md shadow-lg rounded-md px-3'>
        {arr.map((values, idx)=> {
            return <Link className='text-white font-bold bg-black/40 px-3 py-2 rounded-xl shadow-md backdrop-blur-lg active:scale-95' key={idx} to={`/product/${prop.catagory}/${values}`}>{values}</Link>;
        })}
    </div>

}
 
    return (
    <div className='flex justify-center flex-col items-center gap-5'>
       <Components />
       <Outlet />
    </div>
  )
}

export default accessories