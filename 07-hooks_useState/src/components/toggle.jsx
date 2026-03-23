import React, {useState} from 'react'


const toggle = () => {
const [currState, setstate] = useState("ON");
    function toggleState() {
        if(currState === "ON") {
            setstate("OFF");
        }
        else {
            setstate("ON");
        }
    }
  return (
    <div className='flex justify-center items-center'>
        <button className='bg-purple-500 px-5 py-2 text-2xl w-30 rounded-xl' onClick={toggleState}>{currState}</button>
    </div>
  )
}

export default toggle