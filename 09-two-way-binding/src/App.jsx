import React, { useState } from 'react'
import "./App.css";

const App = () => {

  const [text, settext] = useState("")
  // function trackText(value) {
  //   settext(value);
  // }
  const [result, setresult] = useState([])
  function preDf(elem) {
    elem.preventDefault();
    setresult((prev)=> {
      return [...prev, text]
    });
  }

  return (
    <div className='mainContainer'>
       <div className='formContainer'>
        <form onSubmit={(elem)=> {
          preDf(elem);
          settext("");
        }}>
          <input type="text" placeholder='Enter anything' value={text} onChange={(elem)=> {
            let val = elem.target.value;
            // trackText(val);
            settext(val);
          }}/>
          <button>Submit</button>
          {result.map((value, index)=> {
            return <p key={index}>{value}</p>
          })}
        </form>
       </div>
    </div>
  )
}

export default App