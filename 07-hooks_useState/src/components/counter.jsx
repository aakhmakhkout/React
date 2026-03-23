import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0); // count - value, setCount - function to update, 0 - starting value;
    
    function increment() {
        setCount(prev => (prev+1)); // count++ is invalid cause this is constant
        // setCount(incrcount+1); //* these statements will not work because react does batch updating, means react groups multiple state updates and applies them in one go. so all these 3 statements has incrcount = 1 not 3
        // setCount(incrcount+1);
        // setCount(incrcount+1);
        
        // setCount(prev=>(prev+1)); //* this will work cause prev variable will store latest updated value
        // setCount(prev=>(prev+1));
        // setCount(prev=>(prev+1));
    }
    
    // const [decrcount, setCountdec] = useState(50);
    function decrement() {
        setCount(prev=>(prev-1)); //* this is a asynchronous function 
        console.log("hello")
    }
    
    function reset() {
        setCount(0);
    }

    return<div className="flex flex-col w-full h-50 justify-center items-center"> 
        <div className="w-60 h-20 bg-gray-500 flex items-center justify-center text-4xl text-white rounded-3xl mt-2.5">{count}</div>
        <div className="flex gap-2.5">
            <button className="bg-orange-200 m-3 p-2 rounded-2xl" onClick={increment}>Increment</button>
            <button className="bg-blue-200 m-3 p-2 rounded-2xl" onClick={decrement}>Decrement</button>
        </div>
        <div><button className="bg-blue-200 px-4 py-2 rounded-2xl w-55" onClick={reset}>Reset</button></div>
    </div>
}

export default Counter