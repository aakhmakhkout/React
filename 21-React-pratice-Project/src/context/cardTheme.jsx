import React, { createContext, useState } from 'react'

export const CardTheme = createContext();

const cardTheme = (prop) => {
    const [Ctheme, setCtheme] = useState("Dark-theme");
  return (
    <div>
        <CardTheme.Provider value={{Ctheme, setCtheme}}>
        {prop.children}
        </CardTheme.Provider>
    </div>
  )
}

export default cardTheme 