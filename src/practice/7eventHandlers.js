// 7eventHandlers.js
// Example of event handling in React using functional components and hooks
// Includes a button that updates a message when clicked
// just added a new component Greet to show counter increment on button click
// add Eventhandlers in app.js

import React,{useState} from "react";


const AboutEvents = () =>{
    const [value , setValue] = useState("");
      function handleInputChange(event) {
    // event.target -> the <input> element
    console.log("event.type:", event.type);          // "change"
    console.log("event.target:", event.target);      // <input ...>
    console.log("event.target.value:", event.target.value);

    // update state with the typed value
    setValue(event.target.value);
  }

  return (
    <div>
      <input value={value} onChange={handleInputChange} placeholder="Type..." />
      <p>Typed value: {value}</p>
    </div>
  );
}

export default AboutEvents;

// const Eventhandlers =()=> {
//     const [msg,setmsg] = useState("Hello user");

//     const handleClick =() =>{
//         setmsg("msg clicked");

//     }

//     return (
//         <div>
//             <h1> msg: {msg}</h1>
//             <button onClick={handleClick}>
// Click me
//             </button>
//         </div>
//     )
// }
// export default Eventhandlers

// import React, { use, useState } from "react";

// const Greet = () =>{
//     const [count,setCount] = useState(0);
   
//     return (
//         <div>
//             <h1>count : {count}</h1>
//             <button onClick={() => setCount(count +1)}>Increment</button>
//         </div>
//     )
// }
// export default Greet