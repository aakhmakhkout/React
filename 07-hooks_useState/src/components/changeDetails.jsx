import React, {useState} from 'react'

const changeDetails = () => {
      const [user, setuser] = useState({name: "kaneki", age:20});

    function changeUserDetails() {

        setuser({name:"touka", age:user.age});
    }
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='bg-white w-60 flex flex-col justify-center items-center gap-2 rounded-2xl h-40 py-3'>
        <p className='bg-gray-300 px-3 py-1 rounded-2xl'>username is {user.name}</p>
        <p className='bg-gray-300 px-3 py-1 rounded-2xl'>Age is {user.age}</p>
        <button className='bg-green-300 px-3 py-1 rounded-xl' onClick={changeUserDetails}>Change Details</button>
        </div>
        
       </div>
  )
}

export default changeDetails