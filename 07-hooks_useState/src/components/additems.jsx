import React, {useState} from 'react'

const additems = () => {
       const [fruits, setfruits] = useState(["apple", "banana"]);

    function additem() {
        setfruits(function(list) {
            return [...list, "mango"];
        })
    }
  return <div className='flex justify-center items-center '>
      <div className='bg-white w-60 flex flex-col justify-center items-center gap-2 rounded-2xl h-40 py-3'>
        <h1 className='bg-gray-300 px-3 py-1 rounded-2xl'>Add Mango in list</h1>
        <p className='bg-gray-300 px-3 py-1 rounded-2xl'>{fruits + " "}</p>
        <button  className='bg-gray-600 text-white px-3 py-1 rounded-xl' onClick={additem}>Add mango</button>
        
        </div>
    </div>
}

export default additems