import React from 'react'

const themeChange = (prop) => {
    
    const changeTheme = () => {
        if(prop.theme === "Light") {
            prop.settheme("Dark");
        }
        else {
            prop.settheme("Light");
        }
    }
    return (
    <div>
        <button onClick={()=> {
            changeTheme();
        }}>Change Theme</button>
    </div>
  )
}

export default themeChange