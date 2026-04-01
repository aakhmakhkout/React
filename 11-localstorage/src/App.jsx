import React, { useState } from 'react'

localStorage.setItem("user", "kaneki");
localStorage.setItem("age", "12");

const user = localStorage.getItem("user");
const age = localStorage.getItem("age");
console.log(user);
console.log(age);

localStorage.removeItem("age");

console.log(age);

const userDetails = {
  username: "kaneki",
  age: 22,
  city: "srinagar"
}

localStorage.setItem("userDetails", JSON.stringify(userDetails));

const getUserdata1 = localStorage.getItem("userDetails");
console.log(getUserdata1);

const getUser = JSON.parse(localStorage.getItem("userDetails"));
console.log(getUser);


//! Counter



const CounterData = JSON.parse(localStorage.getItem("counterData")) || 0;

const App = () => {
  const [count, setcount] = useState(CounterData);

  function increment() {
    setcount((prev)=> {
      const incrVal = prev+1;
      localStorage.setItem("counterData", JSON.stringify(incrVal));
      return incrVal;
    });
  }
 function decrement() {
    setcount((prev)=> {
      const decrVal = prev-1;
      localStorage.setItem("counterData", JSON.stringify(decrVal));
      return decrVal;
    });
  }
 function reset() {
    setcount((prev)=> {
      const resetVal = 0;
      localStorage.setItem("counterData", JSON.stringify(resetVal));
      return resetVal;
    });
  }

  return (
    <div className='main-Container'>
      <div className='Counter'>
        <div className='display'>
          <input type="text" value={count} readOnly/>
        </div>
        <div className='btns'>
          <button onClick={increment}>Increase</button>
          <button onClick={decrement}>Decrease</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App