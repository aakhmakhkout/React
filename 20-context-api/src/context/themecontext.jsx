//! Creating Context: Context is a container that holds data which can be accessed by multiple components. like a global storage box

import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import { ToggleLeft } from 'lucide-react';

export const Themecontext = createContext(); // creates a context object, this object has a provider (to give data) and a consumer (to use data),after using export, our Themecontext is ready, but for now it is empty cause there is no data and no component is using it, it is just an empty container

const themecontext = (props) => {
  const [theme, setTheme] = useState({mode: "Light", icon: <ToggleLeft size={38} strokeWidth={1.75} />});

  return (
    <div>
      <Themecontext.Provider value={{theme, setTheme}}> {/* Provider(a special component) is what puts data into our container (Themecontext). it supplies data to all components that are inside it means any component wrapped inside this can access the data*/ }
      {props.children}
      </Themecontext.Provider>
      </div>
  )
}

export default themecontext