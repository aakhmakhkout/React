import React, { useState } from 'react'

const createlist = () => {
    const [fruits, setfruits] = useState([])
    function additems(newitems) {
        setfruits(function(prev) {
            return [...prev, newitems];
        })
    }

    const [inputvalues, setinputvalues] = useState("");
    // function getValues(inpval) {
    //     setinputvalues(inpval)
    // }
    
  return (
    <div>
        <h1>fruit list</h1>
        <input value={inputvalues} type="text" onChange={(elem)=> {
            setinputvalues(elem.target.value);
            // getValues(value);
        }}/>
        <button onClick={()=> {        
            additems(inputvalues);
            setinputvalues("");
        }}>add item</button>

        <ul>
            {fruits.map(function(item, index){
                return <li key={index}>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default createlist