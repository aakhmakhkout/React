import React, { useContext } from 'react'
import { CreateUserContext } from '../context/addusersContext'
import { CardTheme } from '../context/cardTheme';

const users = () => {
  const {users} = useContext(CreateUserContext);
  const {Ctheme} = useContext(CardTheme);
  console.log(users);

  return (
    <div className='flex p-3 gap-4 flex-wrap overflow-auto h-full'>
      
        {users.map((value, idx)=> {
          return <div key={idx} className={Ctheme}>
            <div className='flex flex-col px-1 py-2 gap-2 '>
              <div className='flex justify-center'>
              <img src={value.src} alt="img" className='w-20 h-20 rounded-full'/>
              </div>
              <div className='text-center font-extrabold text-xl'>{value.name}</div>
              <h2 className='font-bold text-xl'>{value.role}</h2>
              <h2 className='font-bold text-sm'>{value.email}</h2>
              <div>
              <h2 className='flex justify-center mt-3'>{value.bio}</h2>
              </div>
            </div>
            </div>
        })}
    </div>
  )
}

export default users