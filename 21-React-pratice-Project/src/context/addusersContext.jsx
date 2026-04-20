import React, { createContext, useState } from 'react'

export const CreateUserContext = createContext();

const addusersContext = (prop) => {
    const fallbackObj =[{
        name: "Person Name",
        role: "Role",
        src: "imgUrl",
        bio: "Bio",
        email: "email"

    }]
    const [users, setUsers] = useState(fallbackObj);
  return (
    <div>
        <CreateUserContext value={{users, setUsers}}>
            {prop.children}
        </CreateUserContext>
    </div>
  )
}

export default addusersContext