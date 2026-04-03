//! useEffect(): it lets us run side-effect code after a component renders
//? side-effect code can be fetching api, timers, work with local storage etc. [side effect is any code that affects something outside the rendring of components like api call, console.log, setInterval/setTimeout, DOM manipulation, saving data] 

import { useEffect, useState } from "react"


const App = () => {

  const [Num, setNum] = useState(0);
  const [Num2, setNum2] = useState(0);
  const [Num3, setNum3] = useState(0);
  


  useEffect(()=> {
    console.log("useeffect is running"); //? this runs on every render
  })

  //? Dependency Array []: controls when the effect runs

  //!types of useEffect:

  //?1: Run only once (on mount- mounting means when component appears), usecases = API call, initial setup. since there are no dependencies to watch it only run once
  
  useEffect(()=> {
    console.log("This is useEffect running only once (on mount)")
  }, []);

  //?2: Run on every render (ist one)

  //?3: Run when specific value changes (if old val vs new val diff, run effect else skip)

  useEffect(()=> {
    console.log("this is useEffect running when data in Num2 changes");
  }, [Num2]);


  //todo: {lifecycle - mount- component appears, unmount- component disappears, update - state/prop change }, useEffect handle all these

 //* {async should not be written inside useEffect function like useEffect(async()=>{})} this is wrong)

 //? cleanup function/effect:

 useEffect(()=> {
  console.log("before cleanup");

  return ()=> {
    console.log("after cleanup (unmounting or before next effect)")
  }
 }, [Num3])

  return (
    <div>
      <h1>{Num}</h1>
      <button onClick={()=> {
        setNum(Num+1);
      }}>Click me</button>

      <h1>{Num2}</h1>
      <button onClick={()=> {
        setNum2(Num2+1);
      }} onDoubleClick={()=> {
        setNum3(Num3 + 2);
      }}>Click me</button>
    </div>
  )
}

export default App