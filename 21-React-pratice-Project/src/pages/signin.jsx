import React, { useContext, useState } from 'react'
import { CreateUserContext } from '../context/addusersContext.jsx'


const signin = () => {
    
    const {users, setUsers} = useContext(CreateUserContext);
    

    const [createUser, setCreateUser] = useState({})

    const trackInput = (element) => {
       setCreateUser((prev)=> ({...prev, [element.name]: element.value}))
    //    console.log(createUser);
    }



    const SubmitHandler =(elem) => {
        elem.preventDefault();
    
        if(Object.keys(createUser).length > 0) {
            setUsers((prev)=> 
                [...prev, createUser]
        )
    }
    else {
        alert("Please update the details and try again")
        
    }
        setCreateUser({});     
    }



  return (
    <div className='flex flex-col justify-evenly items-center h-full'>
        <div className='bg-purple-500 text-5xl font-extrabold text-white px-5 py-2 rounded-lg'>
            New User
        </div>


        <form onSubmit={(elem)=> {
            SubmitHandler(elem); 
        }} className='flex flex-col justify-evenly bg-orange-400 min-h-120 w-150 rounded-lg shadow-lg px-5'>


            <input onChange={(elem) => {
                trackInput(elem.target);
            }} className='bg-white py-3 px-2 rounded-lg outline-0 capitalize' type="text" placeholder='Enter your name' name="name" id="namebox" required maxLength={30}/>


            <input onChange={(elem) => {
                trackInput(elem.target);
            }} className='bg-white py-3 px-2 rounded-lg outline-0' type="url" placeholder='Profile pic url' name='src' id="pfp" required/>

            <input onChange={(elem) => {
                trackInput(elem.target);
            }} className='bg-white py-3 px-2 rounded-lg outline-0' type="text" placeholder='what is your role {Web developer, ui/ux developer etc}' name='role' capitalize required id="rolefield" maxLength={30}/>


            <textarea onChange={(elem) => {
                trackInput(elem.target);
            }}  name="bio" id="bio" placeholder='about me' className='resize-none bg-white py-3 px-2 rounded-lg outline-0 ' id="biofield" required maxLength={50}> 

            </textarea>


            <input onChange={(elem) => {
                trackInput(elem.target);
            }} className='bg-white py-3 px-2 rounded-lg outline-0' type="email" name="email" id="email" placeholder='Enter your email' required id="emailfield" />

            <button className='bg-white py-3 rounded-lg font-bold text-2xl active:scale-95 text-orange-700'>Create</button>



        </form>
    </div>
  )
}

export default signin