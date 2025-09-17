// state is local and mutable 
// it is a functional component
// Just add <Statebutton /> in app.js to use this component

import React, {useState} from "react";

function Statebutton(){
    const [count,setcount] = useState(0);
    return (
        <div>
            <h1>count: {count} </h1>
            <button onClick={()=>setcount(count +1)} > Increment </button>
            <button onClick={()=>setcount(count -1)}>Decrement </button>
            
        </div>
    )
}
export default Statebutton;
