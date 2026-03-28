import React from 'react'

const App = () => {

  function submitbtn(elem) {
    elem.preventDefault();
    console.log("form submitted");
  }


  return (
    <div>
      <div className='flex w-80 h-40 bg-cyan-200 justify-center items-center'>
        <form className='flex flex-col justify-center items-center gap-4' onSubmit={(elem)=> {
          submitbtn(elem);
        }}>
          <input className='bg-gray-500 px-3 py-2 rounded-2xl text-white outline-0' type="text" placeholder='Enter anything' />
          <button className='bg-cyan-500 px-3 py-2 rounded-2xl'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default App