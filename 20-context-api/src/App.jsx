//! Context API:

//? APP (it has theme (state)) -> navbar -> sidebar -> button (needs theme), now if we want to give the button theme state we usually do prop drilling, means passing theme state to every nested child components, but navbar and sidebar doesn't need the theme state, only button needs it. so we need a way that any component can directly access the data without passing or relying on its parent. And that is where context api comes in:

//? context api is a way to share data globally in our app without passing props manually at every level. it helps us to avoid prop drilling by providing global access data.

import React from 'react'
import Navbar from "./components/navbar"


const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  )
}

export default App