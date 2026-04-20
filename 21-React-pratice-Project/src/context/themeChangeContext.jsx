import { createContext, useState } from 'react'
export const CreateThemeContext = createContext();

const themeContext = (props) => {
  const [theme, settheme] = useState("Dark");

  return (
    <div>
        <CreateThemeContext.Provider value={{theme, settheme}}>
            {props.children}
        </CreateThemeContext.Provider>
    </div>
  )
}

export default themeContext