import { useState } from "react"

const doublecounter = () => {
    const [dblcount, setdblcount] = useState(1)
    function doubleCounter() {
        setdblcount(function(prev) {
            if(dblcount === 0) {
                prev = 1;
            }
            return prev+prev;
        });
    }

    function reset() {
        setdblcount(0);
    }
      
    return<div className="flex flex-col w-full h-50 justify-center items-center"> 
        <div className="w-60 h-20 bg-cyan-500 flex items-center justify-center text-4xl text-white rounded-3xl mt-2.5">{dblcount}</div>
        <div className="flex gap-2.5">
            <button className="bg-green-400 m-3 p-2 w-30 rounded-2xl" onClick={doubleCounter}>Increment</button>
            <button className="bg-blue-200 m-3 p-2 w-20 rounded-2xl" onClick={reset}>Reset</button>
        </div>
        
    </div>
}


export default doublecounter