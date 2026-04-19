import React from 'react'
import { useContext } from 'react'
import { Themecontext } from '../context/themecontext';
import { ToggleRight } from 'lucide-react';
import { ToggleLeft } from 'lucide-react';

const navlinks = () => {
    const data = useContext(Themecontext); // it is a hook that lets a component directly access data from a Context
    const {theme, setTheme} = data;
    // console.log(data);
    // console.log(theme);
    // console.log(setTheme);

    const changeTheme = () => {
        if(theme.mode === "Light") {
            setTheme({
                mode: "Dark",
                icon: <ToggleRight size={38} strokeWidth={1.75} />
            })
        }
        else{
            setTheme({
                mode: "Light",
                icon: <ToggleLeft size={38} strokeWidth={1.75} />
            });
        }
    }

  return (
    <div className='w-140'>
        <ul className='flex justify-evenly items-center'>
            <li className='text-white font-bold text-xl'>Home</li>
            <li className='text-white font-bold text-xl'>About</li>
            <li className='text-white font-bold text-xl'>Projects</li>
            <li className='text-white font-bold text-xl'>Contact</li>
        <div className='text-white text-xl font-bold flex justify-center items-center gap-2'>{theme.mode}
        <button onClick={changeTheme}>{theme.icon}</button></div>
        </ul>
    </div>
  )
}

export default navlinks