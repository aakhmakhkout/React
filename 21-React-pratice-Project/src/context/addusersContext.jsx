import React, { createContext, useState } from 'react'

export const CreateUserContext = createContext();

const addusersContext = (prop) => {
    const [users, setUsers] = useState([]);
  return (
    <div>
        <CreateUserContext.Provider value={{users, setUsers}}>
            {prop.children}
        </CreateUserContext.Provider>
    </div>
  )
}

export default addusersContext