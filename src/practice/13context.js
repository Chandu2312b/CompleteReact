// -------------context api----------------
// Context API is a way to pass data through the component tree without having to pass props down manually at every level.
// It is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.

import React, {createContext, useContext} from "react";

const Usercontext = createContext();

function Contextusage(){
    const user = "Chandu";
    return(
        <Usercontext.Provider value={user}>
            <ComponentA/>
        </Usercontext.Provider>
    )
}

function ComponentA(){
    return(
        <div>
            <h1>Component A</h1>
            <ComponentB/>
        </div>
    )
}
function ComponentB(){
    return(
        <div>
            <h1>Component B</h1>
            <ComponentC/>
        </div>
    )
}       
function ComponentC(){          
    const user = useContext(Usercontext);
    return(
        <div>
            <h1>Component C</h1>
            <h2>Hello, {user}!</h2>
        </div>
    )
}
export default Contextusage;
