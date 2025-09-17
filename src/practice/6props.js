// Using props to pass data from one component to another
// Just add <Usingprops name="Your Name" age="Your Age" /> in app.js to use this component
// Or use map function to pass array of objects as props from app.js to this component

// if array is const users = [
//   { id: 1, name: "Chandu", age: 21 },
//   { id: 2, name: "Sai", age: 22 },
//   { id: 3, name: "Venkata", age: 23 },
// ];

//  {users.map((user)=>(
//         <Usingprops key ={user.id} name={user.name} age={user.age} />
//       ))}


import React from 'react';

function Usingprops(props){
    return (
        <div>
        <h1> Hello , {props.name}</h1>
        <h2> Your age is , {props.age}</h2>
    </div>
    )
}
export default Usingprops;