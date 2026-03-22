import React from 'react'


const App = () => {

  let updatedtext = "0";
  const updateText = (value)=> {
    updatedtext = value;
    return updatedtext;
  }

  return (
    <div>


      <h1>hello, today's topic is functions</h1>

    {/* onClick={buttonClicked} */}
      <button onClick={()=> {
        console.log("button clicked")
      }}>change user</button>
      <p>hello</p>

      <input onChange={(elem)=> {
        console.log(elem.target.value);
        updateText(elem.target.value);
      }} type="text" placeholder='Enter anything' className='p-4 border-2 border-indigo-600'/>
      <p></p>
    </div>
  )
}

export default App