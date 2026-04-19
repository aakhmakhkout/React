import React, { useState } from 'react'
import Theme from "./components/themeChange.jsx"


const App = () => {
  const [theme, setTheme] = useState("Light");
  return (
    <div>
      <h1>
        {theme} Mode
      </h1>

    <Theme theme={theme} settheme={setTheme}/>
    </div>
  )
}

export default App