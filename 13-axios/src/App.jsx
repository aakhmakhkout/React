import axios from "axios"
import { useState } from "react"

const App = () => {
  const [jokes, setjokes] = useState({});

   const getData = async ()=> {
      const response = await axios.get("https://v2.jokeapi.dev/joke/Any?type=single");
      const {joke} = response.data;
      const result = {joke}
      setjokes(result);
      return result;
   }

  return (
    <div className="container">
      <div className="box">
        <h1>{jokes.joke}</h1>
        <button onClick={()=> {
          getData();
        }}>What</button>
      </div>      
    </div>
  )
}

export default App