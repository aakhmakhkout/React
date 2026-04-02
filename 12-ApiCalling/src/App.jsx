//! fetch - built in browser feature
//? response needs to convert manually
//? does NOT throw error for bad status (like 404)
//? Basic → you handle everything manually

//! axios - external library (need to install it)
//? automatically gives JSON
//? automatically throws error
//? Axios gives extra features out of the box:
//* Request/response interceptors
//* Timeout support
//* Better config handling

import { useState } from 'react';

const App = () => {
  const fallback = {name:{title: "", first:"", last:""}, cell:"", picture:{medium: "./nowhere-to-go"}, location:{country: "", city:""},email:""};

  // localStorage.setItem("fallbackuserdetails", JSON.stringify(fallback));

  const [users, setuser] = useState(fallback);

  async function getData() {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    const userDetails = data.results;
    // console.log(userDetails);
    // localStorage.setItem("userdetails", JSON.stringify(userDetails[0]));
    setuser(userDetails[0]);
    return userDetails[0];
  }


  return(
    <div className='container'>
      <div className="card">
        <div className="mainContent">
          <div className="pfp">
             <img src={users.picture.medium} alt="img" />
          </div>
          <div className="details">
            <div className="name">
              <h1>Name: {users.name.title},{users.name.first}{users.name.last}</h1>
            </div>
            <h1>Cell Number: {users.cell}</h1>
            <h1>Email: {users.email}</h1>
            <h1>City: {users.location.city}</h1>
            <h1>Country: {users.location.country}</h1>
          </div>
        </div>
      <button onClick={()=>{
        getData();
        console.log(users);
        // console.log(users);
      }}>Get User Data</button>
    </div>
    </div> 
    )

}

export default App