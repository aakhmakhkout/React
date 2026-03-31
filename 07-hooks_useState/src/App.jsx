//* STATE: data that a component remembers and can change over time. State is like a variable with memory + power to update UI


//! Hooks: are special functions in React that let us use features like state and lifecycle inside function components.Hooks allow function components to have state and react to changes without reloading the page.

//? before hooks: only class components could use state, and after hooks simple functions can use state and can do everything.

//? A normal function component = static box, Hooks = tools that make the box alive and smart

//todo: hooks features/tools: useState, useEffect, useRef, useContext, useMemo, useCallback

//? useState = lets a component store and update data whenever the data changes.
//* react components are functions, evertime they run, everthing resets, means they don't remember values, that is why we use useState which stores the data outside the function and return on every render.

//? useEffect = runs code after the component renders (handles api calls, timers, eventlisteners)

//? useRef = stores a value without causing re-render. (Access DOM, store previous value, avoid re-render)

//? useContext = share data across components without passing props manually. eg data -> app -> section1 -> leftsection, instead of passing from parent to child, we make the data global, and with the help of useContext we can access it in any component.

//? useMemo: Remembers result of expensive calculation, wihtout it, calculations runs every render, but with it, runs only when needed

//? useCallback: Remembers function so it doesn't recreate on every render

//? Custom hooks: Reusable logic using hooks

//? useReducer : useReducer is used to manage state when it becomes complex

// import React, { useState } from 'react'
// import List from "./components/createlist.jsx"

// const App = () => {
    // let count = 0;
    // function counter() {
    //     count++;
    //     console.log(count);
    //     return count;
    // }
    

//     const [currState, setstate] = useState("ON");
//     function toggleState() {
//         if(currState === "ON") {
//             setstate("OFF");
//         }
//         else {
//             setstate("ON");
//         }
//     }

//     const [text, settext] = useState("");

//     function mirrorText(value) {
//         settext(value);
//     }

//     const [dblcount, setdblcount] = useState(1)
//     function doubleCounter() {
//         setdblcount(function(prev) {
//             if(dblcount === 0) {
//                 prev = 1;
//             }
//             return prev+prev;
//         });
//     }

//   

//  

//   return (
//     <div>
//         {/* //? increment */}
//         <div>
//         <h1>Increment</h1>
//         <button onClick={()=> {
//             increment()
//         }}><h1>Counter is {incrcount}</h1></button>
//         </div>

//         {/* //? decrement */}
//         <div>
//         <h1>Decrement</h1>
//         <button onClick={()=> {
//             decrement();
//         }}><h1>Counter is {decrcount}</h1></button>
//         </div>

//         {/* //? reset */}
//         <div>
//         <h1>reset btn</h1>
//         <button onClick={()=> {
//             reset();
//         }}><h1>Reset values</h1></button>
//         </div>

//         {/* //? toggle on off */}
//         <div>
//         <h1>ON OFF</h1>
//         <button onClick={()=> {
//             toggleState();
//         }}><h1>{currState}</h1></button>
//         </div>

//         {/* //? input mirroring */}
//         <div>
//         <h1>Input Mirror</h1>
//         <input type="text" onChange={(elem)=> {
//             mirrorText(elem.target.value)
//         }} name="input-field"/>
//         <p>{text}</p>
//         </div>

//         {/* //? double counter */}

//         <div>
//         <h1>Double Counter</h1>
        
//         <button onClick={()=> {
//             doubleCounter();
//         }}><h1>{dblcount}</h1></button>
//         </div>

//         {/* //? usestate with objects # arrays and objects in react must not be mutated*/}
//         <div>
//         <h1>change user details</h1>
//         <p>username is {user.name}</p>
//         <p>Age is {user.age}</p>
//         <button onClick={changeUserDetails}>Change Details</button>
        
//         </div>

//         {/* usestate with arrays */}
//         <div>
//         <h1>Add Fruits in list</h1>
//         <p>{fruits}</p>
//         <button onClick={additem}>Add mango</button>
        
//         </div>

//         <List />
//     </div>
//   )
// }

// export default App

import React from 'react'
import Counter from "./components/counter.jsx"
import DblCounter from "./components/doublecounter.jsx"
import Toggle from "./components/toggle.jsx"
import ChangeDetails from "./components/changeDetails.jsx"
import AddItems from "./components/additems.jsx"
import Inputmirror from "./components/inputmirror.jsx"
import Creatlist from "./components/createlist.jsx"


const App = () => {
  return (
    <div className='bg-cyan-800 w-full h-full flex flex-col gap-10'>
        <Counter />
        <hr/>
        <DblCounter />
        <hr />
        <Toggle />
        <hr />
        <ChangeDetails />
        <hr />
        <AddItems />
        <hr />
        <Inputmirror />
        <hr />
        <Creatlist />
    </div>
  )
}

export default App