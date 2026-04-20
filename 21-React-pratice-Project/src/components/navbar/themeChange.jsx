import React, { useContext, useState } from 'react'
import {Moon} from "lucide-react"
import { Sun } from 'lucide-react';
import { CreateThemeContext } from '../../context/themeChangeContext';



const themeChange = () => {
const {theme, settheme} = useContext(CreateThemeContext);
// const iconDisplay ={
//     icon: <Moon size={35} strokeWidth={1.75} />
// }

const iconObj = {
    dark: {
    icon :<Moon size={35} strokeWidth={1.75} />,
    },
    light:{
    icon: <Sun size={35} strokeWidth={1.75} />
}
}

const [themeIcon, seticon] = useState(iconObj.dark);

const changetheme = () => {
    if(theme === "Dark") {
        settheme("Light")
        seticon(iconObj.light)
    }
    else {
        settheme("Dark")
        seticon(iconObj.dark)
    }
}

  return (
      <div className='text-orange-400'>
        <button onClick={changetheme}>
            {themeIcon.icon}
        </button>
        </div>
  )
}

export default themeChange