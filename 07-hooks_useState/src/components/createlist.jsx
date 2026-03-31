import React, { useState } from 'react'

const createlist = () => {
    const [fruits, setfruits] = useState([])
    function additems(newitems) {
        setfruits(function(prev) {
            return [...prev, newitems];
        })
    }

    const [inputvalues, setinputvalues] = useState("");
    // function getValues(inpval) {
    //     setinputvalues(inpval)
    // }
    
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center bg-orange-400 w-80 mb-20 rounded-xl gap-3 py-3'>

        <h1 className='bg-gray-400 px-3 py-1 rounded-xl text-2xl uppercase'>fruit list</h1>
        <input className='bg-white rounded-md opacity-50 p-2' value={inputvalues} type="text" placeholder='Enter fruit name' onChange={(elem)=> {
            setinputvalues(elem.target.value);
            // getValues(value);
        }}/>
        <button className='bg-orange-600 px-4 py-2 rounded-xl text-white text-xl' onClick={()=> {        
            additems(inputvalues);
            setinputvalues("");
        }}>Add Item</button>

        <ul className='flex gap-2 flex-wrap'>
            {fruits.map(function(item, index){
                return <li className='bg-gray-400 px-2 py-1 rounded-md' key={index}>{item}</li>
            })}
        </ul>
            </div>
    </div>
  )
}

export default createlist